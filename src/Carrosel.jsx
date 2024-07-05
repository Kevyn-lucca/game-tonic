import { useState } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import Product from "./Product";
import PropTypes from "prop-types";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import "./middle.css";

function Carrosel({
	GameName,
	GameUrl,
	GameId,

	TotalItens,
	TotalImgs,
}) {
	const [ImgNumber, setImgNumber] = useState(0);
	const [isHighlighted, setIsHighlighted] = useState(false); // Estado para controlar a classe dinâmica

	const HandleClickForward = () => {
		setImgNumber((ImgNumber + 1) % TotalItens);
		setIsHighlighted(true); // Define como true para adicionar a classe
	};

	const HandleClickBack = () => {
		setImgNumber((ImgNumber - 1 + TotalItens) % TotalItens);
		setIsHighlighted(true); // Define como true para adicionar a classe
	};

	const handleTransitionEnd = () => {
		setIsHighlighted(false); // Define como false para remover a classe após a transição
	};

	const getIndex = (index) => (index + TotalImgs) % TotalItens;

	return (
		<Box display="flex" alignItems="center">
			<IconButton
				icon={<ArrowBackIcon />}
				onClick={HandleClickBack}
				aria-label="Previous image"
			/>
			{Array.from({ length: TotalImgs }).map((_, index) => (
				<Product
					key={GameId[getIndex(ImgNumber + index)]}
					id={GameId[getIndex(ImgNumber + index)]}
					name={GameName[getIndex(ImgNumber + index)]}
					boxSize="20rem"
					mx="10px"
					img={GameUrl[getIndex(ImgNumber + index)]}
					alt={GameName[getIndex(ImgNumber + index)] + " img"}
					className={`default ${isHighlighted ? "active " : ""}`}
					onAnimationEnd={handleTransitionEnd}
				/>
			))}
			<IconButton
				icon={<ArrowForwardIcon />}
				onClick={HandleClickForward}
				aria-label="Next image"
			/>
		</Box>
	);
}

Carrosel.propTypes = {
	GameUrl: PropTypes.arrayOf(PropTypes.string).isRequired,
	GameName: PropTypes.arrayOf(PropTypes.string).isRequired,
	GameId: PropTypes.arrayOf(PropTypes.number).isRequired,
	TotalItens: PropTypes.number.isRequired,
	TotalImgs: PropTypes.number.isRequired,
};

export default Carrosel;
