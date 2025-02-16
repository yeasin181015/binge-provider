export interface CategoryProps {
    id?: number;
    category_id: number;
    category_type: "vod" | "tv_channel" | "ad_category" | "tvod";
    position?: number;
    tile_type?: number;
    page_size?: number;
    page_id?: number;
    order_by?: any;
    created_at?: string;
    updated_at?: string;
    name?: string;
    ad_type?: number;
    target_user?: number;
}
declare const BingeSlider: ({ token, isLoading, }: {
    token: string | null;
    isLoading: boolean;
}) => import("react/jsx-runtime").JSX.Element;
export default BingeSlider;
//# sourceMappingURL=BingleSlider.d.ts.map