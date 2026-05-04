/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { Icon } from "ui/system";

// Material Kit 2 React components
import { Box } from "ui/system";
import { Avatar } from "ui/system";
import { Typography } from "ui/system";
import type { ReactNode } from "react";
import type { SurfaceColor } from "types/site";

type ReviewRating = 1 | 2 | 3 | 4 | 5;

interface DefaultReviewCardProps {
  color?: SurfaceColor;
  image?: string;
  name: string;
  date: string;
  review: string;
  rating: ReviewRating;
}

function DefaultReviewCard({
  color = "transparent",
  image = "",
  name,
  date,
  review,
  rating,
}: DefaultReviewCardProps) {
  const ratings: Record<number, ReactNode[]> = {
    0.5: [
      <Icon key={1}>star_outline</Icon>,
      <Icon key={2}>star_outline</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    1: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star_outline</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    1.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star_half</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    2: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    2.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star_half</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    3: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    3.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star_half</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    4: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    4.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star</Icon>,
      <Icon key={5}>star_half</Icon>,
    ],
    5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star</Icon>,
      <Icon key={5}>star</Icon>,
    ],
  };

  const cardBgColor =
    color === "transparent" ? "transparent" : color === "light" ? "grey.100" : color;
  const cardTextColor =
    color === "transparent" || color === "light" ? "text.primary" : "common.white";

  return (
    <Box
      sx={{
        bgcolor: cardBgColor,
        borderRadius: 4,
        boxShadow: color === "transparent" ? "none" : 3,
        p: 3,
      }}
    >
      {image && (
        <Avatar
          src={image}
          alt={name}
          variant="rounded"
          sx={{ width: 56, height: 56, boxShadow: 3, mt: -5, mb: 1 }}
        />
      )}
      <Box lineHeight={1}>
        <Typography
          display="block"
          variant={image ? "button" : "h6"}
          sx={{ color: cardTextColor, fontWeight: 700 }}
          mb={0.5}
        >
          {name}
        </Typography>
        <Typography
          variant={image ? "caption" : "button"}
          sx={{
            fontWeight: 400,
            lineHeight: 1,
            display: "flex",
            alignItems: "center",
            color: cardTextColor,
          }}
        >
          <Icon>schedule</Icon>&nbsp;
          {date}
        </Typography>
      </Box>
      <Typography
        variant="body2"
        color={color === "transparent" || color === "light" ? "text" : "white"}
        my={4}
      >
        &quot;{review}&quot;
      </Typography>
      <Typography
        variant="h4"
        color={color === "transparent" || color === "light" ? "text" : "white"}
        sx={{
          display: "flex",
          alignItems: "center",
          ml: 0.375,

          "& .material-icons-round": {
            ml: -0.375,
          },
        }}
      >
        {ratings[rating]}
      </Typography>
    </Box>
  );
}

export default DefaultReviewCard;
