// 포트폴리오 배분 타입
export interface PortfolioAllocation {
	stock: string;
	percentage: number;
	amount: number;
}

// 성과 지표 타입
export interface PerformanceMetrics {
	label: string;
	portfolio: string;
	spy: string;
	qqq: string;
}

// 간단한 성과 지표 타입
export interface QuickMetrics {
	annualReturn: string;
	sharpeRatio: string;
	maxDrawdown: string;
	volatility: string;
}

// 예측 결과 타입
export interface PredictionResult {
	portfolioAllocation: PortfolioAllocation[];
	performanceMetrics: PerformanceMetrics[];
	quickMetrics: QuickMetrics;
}

// API 응답 타입
export interface ApiResponse<T> {
	data?: T;
	error?: string;
}

// XAI 관련 타입 정의
export interface FeatureImportance {
	feature_name: string;
	importance_score: number;
	asset_name: string;
}

export interface AttentionWeight {
	from_asset: string;
	to_asset: string;
	weight: number;
}

export interface XAIData {
	feature_importance: FeatureImportance[];
	attention_weights: AttentionWeight[];
	explanation_text: string;
}

// XAI API 요청 타입
export interface XAIRequest {
	investment_amount: number;
	risk_tolerance: string;
	investment_horizon: number;
}

// 새로운 시각화를 위한 타입들
export interface StockPriceData {
	date: string;
	price: number;
	volume: number;
	symbol: string;
}

export interface CorrelationData {
	stock1: string;
	stock2: string;
	correlation: number;
}

export interface RiskReturnData {
	symbol: string;
	risk: number;
	return_rate: number;
	allocation: number;
}

export interface SectorAllocation {
	sector: string;
	percentage: number;
	stocks: string[];
}

export interface PerformanceHistory {
	date: string;
	portfolio: number;
	spy: number;
	qqq: number;
}

// 새로운 API 타입들
export interface AllocationItem {
	symbol: string;
	weight: number;
}

export interface HistoricalRequest {
	portfolio_allocation: AllocationItem[];
	start_date?: string;
	end_date?: string;
}

export interface HistoricalResponse {
	performance_history: PerformanceHistory[];
}

export interface CorrelationRequest {
	tickers: string[];
	period?: string;
}

export interface CorrelationResponse {
	correlation_data: CorrelationData[];
}

export interface RiskReturnRequest {
	portfolio_allocation: AllocationItem[];
	period?: string;
}

export interface RiskReturnResponse {
	risk_return_data: RiskReturnData[];
}

export interface MarketData {
	symbol: string;
	name: string;
	price: number;
	change: number;
	change_percent: number;
	last_updated: string;
}

export interface MarketStatusResponse {
	market_data: MarketData[];
	last_updated: string;
}
