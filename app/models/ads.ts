export class Ads {
    id: string; //광고소재 아이디
    name: string; //광고소재 이름
    adgroup_id: string; //광고그룹 아이디
    adgroup_name: string; //광고그룹 이름
    use_group_bid_amt: number; //그룹공통 기본입찰가
    current_rank: number; //현재 순위
    aimed_rank: number; //희망순위
    bid_amt: number; //입찰금액
    bid_amt_limit: number; //입찰 한도
    bid_change_amt: number; //가감액
    keywords: string; //키워드
    is_bidding: number; //이 광고그룹에 속한 광고소재의 자동입찰 진행 여부 (1: 가능, 0: 불가능)
    is_active: string; //이 광고그룹의 현재 광고진행 여부(ON: 광고진행, OFF: 광고미진행)
}
