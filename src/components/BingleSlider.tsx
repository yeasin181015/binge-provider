"use client";
import React, { useEffect, useState } from "react";
import WatchIcon from "../icons/WatchIcon";
import { Box, Button, Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import SliderRowForGenre from "./SliderRowForGenre";
import { fetchCategories } from "../apis/fetchCategories";
import VideoPlayer from "./VideoPlayerComponents/VideoPlayer";

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

const BingeSlider = ({
  token,
  isLoading,
}: {
  token: string | null;
  isLoading: boolean;
}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      if (token) {
        try {
          const fetchedCategories = await fetchCategories(token);
          setCategories(fetchedCategories);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      }
    };

    if (token) {
      getCategories();
    }
  }, [token]);

  return (
    <Box sx={{ mt: "100px !important" }}>
      {categories?.map((item: any, index: any) => {
        console.log("item", item);
        return (
          <Box
            key={item.category_id}
            sx={{ mb: categories.length > 1 ? "80px" : 0 }}
          >
            {categories.length > 1 && (
              <Typography
                className="watchnow-text"
                sx={{ fontSize: "18px", mb: 1, fontWeight: "bold" }}
              >
                {item.name}
              </Typography>
            )}
            <SliderRowForGenre
              key={item.category_id}
              isLoading={isLoading}
              category={item}
              type="cardWithHover"
              visibleOverflow={true}
              token={token ?? ""}
            />
          </Box>
        );
      })}
      {/* <VideoPlayer /> */}
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
            background: "#FF4A50",
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
