export default interface TrackingData {
  trackingNumber: string | undefined;
  statuses: TrackingStatus[];
  origin: string | undefined;
  destination: string | undefined;
  weight: number | undefined;
  numberOfPcs: number | undefined;
  consignee: string | undefined;
  searchStatus: "none" | "notFound" | "found"
}

export interface TrackingStatus {
  id: number;
  date: string;
  time: string;
  status: string;
}