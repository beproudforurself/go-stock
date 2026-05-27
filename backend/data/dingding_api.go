package data

import (
	"encoding/json"
	"go-stock/backend/logger"
	"strings"

	"github.com/duke-git/lancet/v2/strutil"
	"github.com/go-resty/resty/v2"
)

// @Author spark
// @Date 2025/1/3 13:53
// @Desc
//-----------------------------------------------------------------------------------

type DingDingAPI struct {
	client *resty.Client
}

func NewDingDingAPI() *DingDingAPI {
	return &DingDingAPI{
		client: SharedHTTPClient,
	}
}

func (DingDingAPI) SendDingDingMessage(message string) string {
	if GetSettingConfig().DingPushEnable == false {
		//logger.SugaredLogger.Info("钉钉推送未开启")
		return "钉钉推送未开启"
	}
	body := normalizeDingDingMessageBody(message)
	// 发送钉钉消息
	resp, err := SharedHTTPClient.R().
		SetHeader("Content-Type", "application/json").
		SetBody(body).
		Post(getApiURL())
	if err != nil {
		logger.SugaredLogger.Error(err.Error())
		return "发送钉钉消息失败"
	}
	logger.SugaredLogger.Infof("send dingding message: %s", resp.String())
	return "发送钉钉消息成功"
}

func normalizeDingDingMessageBody(message string) any {
	var payload map[string]any
	if err := json.Unmarshal([]byte(strings.TrimSpace(message)), &payload); err == nil {
		if _, ok := payload["msgtype"]; ok {
			return payload
		}
	}

	message = normalizeDingDingMarkdownText(message)
	if message == "" {
		message = "go-stock 通知"
	}

	return &Message{
		Msgtype: "markdown",
		Markdown: Markdown{
			Title: "go-stock 通知",
			Text:  message,
		},
		At: At{
			IsAtAll: true,
		},
	}
}

func normalizeDingDingMarkdownText(message string) string {
	return strutil.ReplaceWithMap(message, map[string]string{
		"\\n":   "\n",
		"\\r":   "\r",
		"\\t":   "\t",
		"\\\\n": "\n",
		"\\\\r": "\r",
		"\\\\t": "\t",
	})
}

func getApiURL() string {
	return GetSettingConfig().DingRobot
}

func (DingDingAPI) SendToDingDing(title, message string) string {
	message = normalizeDingDingMarkdownText(message)
	// 发送钉钉消息
	resp, err := SharedHTTPClient.R().
		SetHeader("Content-Type", "application/json").
		SetBody(&Message{
			Msgtype: "markdown",
			Markdown: Markdown{
				Title: "go-stock " + title,
				Text:  message,
			},
			At: At{
				IsAtAll: true,
			},
		}).
		Post(getApiURL())
	if err != nil {
		logger.SugaredLogger.Error(err.Error())
		return "发送钉钉消息失败"
	}
	logger.SugaredLogger.Infof("send dingding message: %s", resp.String())
	return "发送钉钉消息成功"
}

type Message struct {
	Msgtype  string   `json:"msgtype"`
	Markdown Markdown `json:"markdown"`
	At       At       `json:"at"`
}

type Markdown struct {
	Title string `json:"title"`
	Text  string `json:"text"`
}

type At struct {
	AtMobiles []string `json:"atMobiles"`
	AtUserIds []string `json:"atUserIds"`
	IsAtAll   bool     `json:"isAtAll"`
}
