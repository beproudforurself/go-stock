export namespace data {
	
	export class FollowedStock {
	    StockCode: string;
	    Name: string;
	    Volume: number;
	    CostPrice: number;
	    Price: number;
	    PriceChange: number;
	    ChangePercent: number;
	    AlarmChangePercent: number;
	    AlarmPrice: number;
	    // Go type: time
	    Time: any;
	    Sort: number;
	    IsDel: number;
	
	    static createFrom(source: any = {}) {
	        return new FollowedStock(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.StockCode = source["StockCode"];
	        this.Name = source["Name"];
	        this.Volume = source["Volume"];
	        this.CostPrice = source["CostPrice"];
	        this.Price = source["Price"];
	        this.PriceChange = source["PriceChange"];
	        this.ChangePercent = source["ChangePercent"];
	        this.AlarmChangePercent = source["AlarmChangePercent"];
	        this.AlarmPrice = source["AlarmPrice"];
	        this.Time = this.convertValues(source["Time"], null);
	        this.Sort = source["Sort"];
	        this.IsDel = source["IsDel"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Settings {
	    ID: number;
	    // Go type: time
	    CreatedAt: any;
	    // Go type: time
	    UpdatedAt: any;
	    // Go type: gorm
	    DeletedAt: any;
	    localPushEnable: boolean;
	    dingPushEnable: boolean;
	    dingRobot: string;
	    updateBasicInfoOnStart: boolean;
	    refreshInterval: number;
	    openAiEnable: boolean;
	    openAiBaseUrl: string;
	    openAiApiKey: string;
	    openAiModelName: string;
	    openAiMaxTokens: number;
	    openAiTemperature: number;
	
	    static createFrom(source: any = {}) {
	        return new Settings(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ID = source["ID"];
	        this.CreatedAt = this.convertValues(source["CreatedAt"], null);
	        this.UpdatedAt = this.convertValues(source["UpdatedAt"], null);
	        this.DeletedAt = this.convertValues(source["DeletedAt"], null);
	        this.localPushEnable = source["localPushEnable"];
	        this.dingPushEnable = source["dingPushEnable"];
	        this.dingRobot = source["dingRobot"];
	        this.updateBasicInfoOnStart = source["updateBasicInfoOnStart"];
	        this.refreshInterval = source["refreshInterval"];
	        this.openAiEnable = source["openAiEnable"];
	        this.openAiBaseUrl = source["openAiBaseUrl"];
	        this.openAiApiKey = source["openAiApiKey"];
	        this.openAiModelName = source["openAiModelName"];
	        this.openAiMaxTokens = source["openAiMaxTokens"];
	        this.openAiTemperature = source["openAiTemperature"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class StockBasic {
	    ID: number;
	    // Go type: time
	    CreatedAt: any;
	    // Go type: time
	    UpdatedAt: any;
	    // Go type: gorm
	    DeletedAt: any;
	    ts_code: string;
	    symbol: string;
	    name: string;
	    area: string;
	    industry: string;
	    fullname: string;
	    enname: string;
	    cnspell: string;
	    market: string;
	    exchange: string;
	    curr_type: string;
	    list_status: string;
	    list_date: string;
	    delist_date: string;
	    is_hs: string;
	    act_name: string;
	    act_ent_type: string;
	
	    static createFrom(source: any = {}) {
	        return new StockBasic(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ID = source["ID"];
	        this.CreatedAt = this.convertValues(source["CreatedAt"], null);
	        this.UpdatedAt = this.convertValues(source["UpdatedAt"], null);
	        this.DeletedAt = this.convertValues(source["DeletedAt"], null);
	        this.ts_code = source["ts_code"];
	        this.symbol = source["symbol"];
	        this.name = source["name"];
	        this.area = source["area"];
	        this.industry = source["industry"];
	        this.fullname = source["fullname"];
	        this.enname = source["enname"];
	        this.cnspell = source["cnspell"];
	        this.market = source["market"];
	        this.exchange = source["exchange"];
	        this.curr_type = source["curr_type"];
	        this.list_status = source["list_status"];
	        this.list_date = source["list_date"];
	        this.delist_date = source["delist_date"];
	        this.is_hs = source["is_hs"];
	        this.act_name = source["act_name"];
	        this.act_ent_type = source["act_ent_type"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class StockInfo {
	    ID: number;
	    // Go type: time
	    CreatedAt: any;
	    // Go type: time
	    UpdatedAt: any;
	    // Go type: gorm
	    DeletedAt: any;
	    "日期": string;
	    "时间": string;
	    "股票代码": string;
	    "股票名称": string;
	    "上次当前价格": number;
	    "当前价格": string;
	    "成交的股票数": string;
	    "成交金额": string;
	    "今日开盘价": string;
	    "昨日收盘价": string;
	    "今日最高价": string;
	    "今日最低价": string;
	    "竞买价": string;
	    "竞卖价": string;
	    "买一报价": string;
	    "买一申报": string;
	    "买二报价": string;
	    "买二申报": string;
	    "买三报价": string;
	    "买三申报": string;
	    "买四报价": string;
	    "买四申报": string;
	    "买五报价": string;
	    "买五申报": string;
	    "卖一报价": string;
	    "卖一申报": string;
	    "卖二报价": string;
	    "卖二申报": string;
	    "卖三报价": string;
	    "卖三申报": string;
	    "卖四报价": string;
	    "卖四申报": string;
	    "卖五报价": string;
	    "卖五申报": string;
	    changePercent: number;
	    changePrice: number;
	    highRate: number;
	    lowRate: number;
	    costPrice: number;
	    costVolume: number;
	    profit: number;
	    profitAmount: number;
	    profitAmountToday: number;
	    sort: number;
	    alarmChangePercent: number;
	    alarmPrice: number;
	
	    static createFrom(source: any = {}) {
	        return new StockInfo(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ID = source["ID"];
	        this.CreatedAt = this.convertValues(source["CreatedAt"], null);
	        this.UpdatedAt = this.convertValues(source["UpdatedAt"], null);
	        this.DeletedAt = this.convertValues(source["DeletedAt"], null);
	        this["日期"] = source["日期"];
	        this["时间"] = source["时间"];
	        this["股票代码"] = source["股票代码"];
	        this["股票名称"] = source["股票名称"];
	        this["上次当前价格"] = source["上次当前价格"];
	        this["当前价格"] = source["当前价格"];
	        this["成交的股票数"] = source["成交的股票数"];
	        this["成交金额"] = source["成交金额"];
	        this["今日开盘价"] = source["今日开盘价"];
	        this["昨日收盘价"] = source["昨日收盘价"];
	        this["今日最高价"] = source["今日最高价"];
	        this["今日最低价"] = source["今日最低价"];
	        this["竞买价"] = source["竞买价"];
	        this["竞卖价"] = source["竞卖价"];
	        this["买一报价"] = source["买一报价"];
	        this["买一申报"] = source["买一申报"];
	        this["买二报价"] = source["买二报价"];
	        this["买二申报"] = source["买二申报"];
	        this["买三报价"] = source["买三报价"];
	        this["买三申报"] = source["买三申报"];
	        this["买四报价"] = source["买四报价"];
	        this["买四申报"] = source["买四申报"];
	        this["买五报价"] = source["买五报价"];
	        this["买五申报"] = source["买五申报"];
	        this["卖一报价"] = source["卖一报价"];
	        this["卖一申报"] = source["卖一申报"];
	        this["卖二报价"] = source["卖二报价"];
	        this["卖二申报"] = source["卖二申报"];
	        this["卖三报价"] = source["卖三报价"];
	        this["卖三申报"] = source["卖三申报"];
	        this["卖四报价"] = source["卖四报价"];
	        this["卖四申报"] = source["卖四申报"];
	        this["卖五报价"] = source["卖五报价"];
	        this["卖五申报"] = source["卖五申报"];
	        this.changePercent = source["changePercent"];
	        this.changePrice = source["changePrice"];
	        this.highRate = source["highRate"];
	        this.lowRate = source["lowRate"];
	        this.costPrice = source["costPrice"];
	        this.costVolume = source["costVolume"];
	        this.profit = source["profit"];
	        this.profitAmount = source["profitAmount"];
	        this.profitAmountToday = source["profitAmountToday"];
	        this.sort = source["sort"];
	        this.alarmChangePercent = source["alarmChangePercent"];
	        this.alarmPrice = source["alarmPrice"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

