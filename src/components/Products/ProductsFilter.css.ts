import { style } from "@vanilla-extract/css"; 

export const container = style({
  padding: "20px",
});

export const filterSection = style({
  marginBottom: "20px",
});

export const brandFilter = style({ 
    display: "flex", 
    flexWrap: "wrap", 
    gap: "10px" 
});

export const brandCheckbox = style({
  display: "inline-block",
  marginRight: "15px",
});

export const productContainer = style({
  marginBottom: "20px",
});

export const productDetailContainer = style({
    display: "flex", 
    flexWrap: "wrap", 
    gap: "15px"
});

export const productDetail = style({
  marginBottom: "10px",
});