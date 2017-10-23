export class Adgroups {
    no: number;
    id: string; //이 광고그룹의 id
    name: string; //이 광고그룹의 이름
    campaign_id: string; //이 광고그룹이 속한 캠페인의 id
    campaign_name: string; //이 광고그룹이 속한 캠페인의 이름
    site: string; //이 광고그룹이 연결된 사이트
    bid_amt: number; //이 광고그룹 default 입찰가 
    total_ad_count: number; //이 광고그룹에 속한 광고소재 갯수 (광고소재수)
    bidding_ad_count:  number; //이 광고그룹에 속한 광고소재 중 자동입찰중인 광고소재의 갯수 (입찰개수)
    is_on_stage: number; //이 광고그룹의 광고그룹입찰리스트 등록 여부 (1: 등록, 0: 미등록)
    is_bidding: number; //이 광고그룹에 속한 광고소재의 자동입찰 진행 여부 (1: 가능, 0: 불가능)
    is_active: string; //이 광고그룹의 현재 광고진행 여부(ON: 광고진행, OFF: 광고미진행)
}
