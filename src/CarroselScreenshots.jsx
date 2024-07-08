import { useState } from "react";
import { Box, IconButton, Image } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import "./middle.css";

function Carrosel({ totalItems, totalImgs, imgUrl }) {
	const [imgNumber, setImgNumber] = useState(0);
	const [isHighlighted, setIsHighlighted] = useState(false);

	const handleClickForward = () => {
		setImgNumber((imgNumber + 1) % totalItems);
		setIsHighlighted(true);
	};

	const handleClickBack = () => {
		setImgNumber((imgNumber - 1 + totalItems) % totalItems);
		setIsHighlighted(true);
	};

	const handleTransitionEnd = () => {
		setIsHighlighted(false);
	};

	const getIndex = (index) => (index + imgNumber) % totalItems;

	return (
		<Box display="flex" alignItems="center">
			<IconButton
				icon={<ArrowBackIcon />}
				onClick={handleClickBack}
				aria-label="Previous image"
			/>
			{Array.from({ length: totalImgs }).map((_, index) => (
				<Image
					key={index}
					src={imgUrl[getIndex(index)]}
					alt={`Image ${getIndex(index)}`}
					className={isHighlighted ? "highlighted" : ""}
					onTransitionEnd={handleTransitionEnd}
				/>
			))}
			<IconButton
				icon={<ArrowForwardIcon />}
				onClick={handleClickForward}
				aria-label="Next image"
			/>
		</Box>
	);
}

Carrosel.propTypes = {
	imgUrl: PropTypes.arrayOf(PropTypes.string).isRequired,
	totalItems: PropTypes.number.isRequired,
	totalImgs: PropTypes.number.isRequired,
};

export default Carrosel;
