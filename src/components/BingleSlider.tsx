import { useEffect, useState } from "react";
import { fetchCategories } from "../apis/fetchCategories";
import { handleAnonLogin } from "../utils/handleAnnonLogin";
import { useQuery } from "react-query";
import { Box, Button } from "@mui/material";
import SliderRowForGenre from "./SliderRowForGenre";
import WatchIcon from "../icons/WatchIcon";

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

const fetchToken = async () => {
  const token = await handleAnonLogin();
  return token;
};

const useToken = () => {
  const { data, error, isLoading } = useQuery("token", fetchToken);
  return { token: data, error, isLoading };
};

const BingeSlider = () => {
  const { token } = useToken();

  const [categoryList, setCategoryList] = useState<CategoryProps[]>([]);

  useEffect(() => {
    if (token) {
      fetchCategories(token).then((category) => {
        setCategoryList(category);
      });
    }
  }, [token]);

  return (
    <Box sx={{ mt: "100px !important" }}>
      {categoryList?.map((item, index) => (
        <Box key={item.category_id}>
          <SliderRowForGenre
            key={item.category_id}
            category={item}
            type="cardWithHover"
            visibleOverflow={true}
            token={token ?? ""}
          />
        </Box>
      ))}
      <Button
        className="watchnow-text"
        sx={{
          background: "#FF4A50",
          borderRadius: "32px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "6px",
          padding: "16px 22px",
          color: "#fff",
          textTransform: "none",
          fontSize: { xs: "15px", sm: "14px", lg: "16px" },
          fontWeight: { xs: "400", lg: "600" },
          mt: "121px",
          mb: "160px",
          mx: "auto",
          "&:hover": {
            background: "#FF4A50", // Set the background color to the same as the default state
          },
        }}
        onClick={() => {
          window.location.assign("https://www.binge.buzz");
        }}
      >
        Watch Now
        <WatchIcon />
      </Button>
    </Box>
  );
};

export default BingeSlider;
