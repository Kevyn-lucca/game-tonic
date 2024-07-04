import { useState } from "react";
import PropTypes from "prop-types";
import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Box,
	Input,
	InputRightElement,
	InputGroup,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function GameNav({ imgurl }) {
	const [selectedTab, setSelectedTab] = useState(null);

	const handleTabClick = (index) => {
		if (selectedTab === index) {
			setSelectedTab(null);
		} else {
			setSelectedTab(index);
		}
	};

	return (
		<Box
			display="flex"
			justifyContent="center"
			bgImage={imgurl}
			bgSize="cover"
			bgPos="center"
			height="45rem"
			bgRepeat="no-repeat"
		>
			<Tabs
				opacity="0.9"
				isLazy
				position="relative"
				variant="unstyled"
				defaultIndex="null"
				marginTop="5rem"
				index={selectedTab}
			>
				<TabList
					backgroundColor="blue.600"
					padding="1px"
					display="flex"
					alignItems="center"
				>
					<Tab
						width="7rem"
						height="2.5rem"
						backgroundColor="blue.600"
						color="white"
						_hover={{
							bgGradient: "linear(to-r, blue.500, blue.300)",
						}}
						_selected={{ bg: "blue.500" }}
						onClick={() => handleTabClick(0)}
					>
						For you
					</Tab>
					<Tab
						width="8rem"
						height="2.5rem"
						backgroundColor="blue.600"
						color="white"
						_hover={{
							bgGradient: "linear(to-r, blue.500, blue.300)",
						}}
						_selected={{ bg: "blue.500" }}
						onClick={() => handleTabClick(1)}
					>
						New games
					</Tab>
					<Tab
						width="7rem"
						height="2.5rem"
						backgroundColor="blue.600"
						color="white"
						_hover={{
							bgGradient: "linear(to-r, blue.500, blue.300)",
						}}
						_selected={{ bg: "blue.500" }}
						onClick={() => handleTabClick(2)}
					>
						Tags
					</Tab>
					<Tab
						width="7rem"
						height="2.5rem"
						marginRight="4rem"
						backgroundColor="blue.600"
						color="white"
						_hover={{
							bgGradient: "linear(to-r, blue.500, blue.300)",
						}}
						_selected={{ bg: "blue.500" }}
						onClick={() => handleTabClick(3)}
					>
						Deals
					</Tab>
					<InputGroup
						width="15rem"
						border="solid"
						borderColor="transparent"
						focusBorderColor="white"
					>
						<InputRightElement cursor="pointer" backgroundColor="green.400">
							<SearchIcon />
						</InputRightElement>
						<Input color="white" width="15rem" placeholder="Search" />
					</InputGroup>
				</TabList>

				<TabPanels>
					<TabPanel backgroundColor="blue.600" color="white">
						<p>Um Carrosel com as imagens deve vir aqui</p>
					</TabPanel>
					<TabPanel></TabPanel>

					<TabPanel backgroundColor="blue.600" color="white">
						<p>Uma aba com varias tags deve vir aqui</p>
					</TabPanel>
					<TabPanel></TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
}

GameNav.propTypes = { imgurl: PropTypes.string.isRequired };

export default GameNav;
