import { useEffect, useState } from "react";
import { fetchCategories } from "../apis/fetchCategories";
import { useAnonToken } from "../hooks/useAnnonToken";

interface CategoryProps {
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

const BingeSlider = () => {
    const [categoryList, setCategoryList] = useState<CategoryProps[]>([]);
  const token = useAnonToken();

  useEffect(() => {
    if (token) {
      fetchCategories(token).then((category) => {
        setCategoryList(category);
      });
    }
  }, [token]);
    return ( <div>Binge Slider</div> );
}
 
export default BingeSlider;