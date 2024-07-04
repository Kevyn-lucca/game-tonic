import { useState } from "react";
import { Box, Image, IconButton } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

function Carrosel({ GameName, GameUrl, TotalItens }) {
	const [ImgNumber, setImgNumber] = useState(0);

	const HandleClickForward = () => {
		setImgNumber((ImgNumber + 1) % TotalItens);
	};

	const HandleClickBack = () => {
		setImgNumber((ImgNumber - 1 + TotalItens) % TotalItens);
	};

	const getIndex = (index) => (index + TotalItens) % TotalItens;

	return (
		<Box display="flex" alignItems="center">
			<IconButton
				icon={<ArrowBackIcon />}
				onClick={HandleClickBack}
				aria-label="Previous image"
			/>
			{Array.from({ length: TotalItens }).map((_, index) => (
				<Image
					key={index}
					boxSize="20rem"
					src={GameUrl[getIndex(ImgNumber + index)]}
					alt={GameName[getIndex(ImgNumber + index)] + " img"}
					mx="2"
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
	TotalItens: PropTypes.number.isRequired,
};

export default Carrosel;
