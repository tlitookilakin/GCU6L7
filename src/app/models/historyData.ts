import { HistoryBig } from "./history-big";
import { HistorySmall } from "./history-small";

export interface HistoryData {
    complete: HistoryBig[];
    tiny: HistorySmall[];
}
