import React from "react";
import Chip from "@mui/material/Chip";
import FiberManualRecordSharpIcon from '@mui/icons-material/FiberManualRecordSharp';

const getBadge = (id) => {
    const badges = [null, "NEW", "SALE"];
    return badges[id % badges.length];
};

const ProductCard = ({ product }) => {
    const badge = getBadge(product.id);
    const originalPrice = Math.round(product.price * 1.2);
    
    // Limit colors to first 3 and calculate remaining count
    const maxDisplayColors = 3;
    const displayColors = product.colors?.slice(0, maxDisplayColors) || [];
    const remainingColors = product.colors?.length > maxDisplayColors ? product.colors.length - maxDisplayColors : 0;

    return (
        <div className="flex flex-col items-center relative" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: "15px", width: "100%" }}>
            <div style={{ position: "relative", width: "100%" }}>
                <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover mb-2 mx-auto w-50 h-50"
                    style={{ borderRadius: "15px 15px 0px 0px", width: "100%" }}
                />
                {badge && (
                    <Chip
                        label={badge}
                        size="small"
                        sx={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                            fontWeight: "bold",
                            zIndex: 2,
                            backgroundColor: badge === "NEW" ? "#CAFDFE" : "#FFE9D5",
                            color: badge === "NEW" ? "#003768" : "#7A0916"
                        }}
                    />
                )}
            </div>
            <section className="w-full p-4">
                <h3
                    className="font-bold"
                    style={{
                        fontSize: "14px",
                        fontFamily: "DM Sans Variable, sans-serif",
                        cursor: "pointer",
                        marginLeft: "43px",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.textDecoration = "underline")}
                    onMouseLeave={e => (e.currentTarget.style.textDecoration = "none")}
                >
                    {product.name}
                </h3>

                <div className="flex items-center justify-between w-full gap-2">
                    <div className="flex items-center gap-1">
                        <div className="relative h-5" style={{ width: `${displayColors.length * 12}px` }}>
                            {displayColors.map((color, index) => (
                                <FiberManualRecordSharpIcon
                                    key={index}
                                    sx={{
                                        color: color,
                                        fontSize: 20,
                                        position: "absolute",
                                        right: `${index * 9}px`, 
                                        zIndex: displayColors.length - index,
                                    }}
                                />
                            ))}
                        </div>
                        {remainingColors > 0 && (
                            <span
                                style={{
                                    fontSize: "12px",
                                    color: "#666",
                                    fontWeight: "500",
                                    marginLeft: "4px"
                                }}
                            >
                                +{remainingColors}
                            </span>
                        )}
                    </div>
                    <div className="flex gap-2 items-center">
                        <span
                            style={{
                                color: "#888",
                                textDecoration: "line-through",
                                opacity: 0.7
                            }}
                        >
                            $. {originalPrice}
                        </span>
                        <span>
                            $. {product.price}
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductCard;
