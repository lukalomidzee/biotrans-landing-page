export default interface TrackingData {
  trackingNumber: string;
  statuses: TrackingStatus[];
  origin: string;
  destination: string;
  weight: number;
  numberOfPcs: number;
  consignee: string;
  success: boolean
}

export interface TrackingStatus {
  id: number;
  date: string;
  time: string;
  status: string;
}