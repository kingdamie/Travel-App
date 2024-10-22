import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useRef, useState } from "react";
import Colors from "@/constants/Colors";
import destinationCategories from "@/data/categories";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
	onCategoryChanged: (category:string) => void;
};
const CategoryButton = ({ onCategoryChanged }: Props) => {
	const itemRef = useRef<TouchableOpacity[]>([]);
	const scrollRef = useRef<ScrollView>(null);
	const [activeIndex, setActiveIndex] = useState(0);

	const handleSelectCategory = (index: number) => {
		setActiveIndex(index);

		const selected = itemRef.current[index];

		if (selected) {
			selected.measure((fx, fy, width, height, px, py) => {
				scrollRef.current?.scrollTo({
					x: px, // Use pageX
					y: 0,
					animated: true,
				});
			});
		}

		onCategoryChanged(destinationCategories[index].title);
	};

	return (
		<View>
			<Text style={styles.title}>Categories</Text>
			<ScrollView
				horizontal
				ref={scrollRef}
				contentContainerStyle={{
					gap: 10,
					paddingVertical: 10,
					marginBottom: 10,
				}}
				showsHorizontalScrollIndicator={false}
			>
				{destinationCategories.map((item, index) => (
					<TouchableOpacity
						key={index}
						ref={(el) => {
							if (el) itemRef.current[index] = el;
						}}
						onPress={() => handleSelectCategory(index)}
						style={
							activeIndex === index
								? styles.activeCategoryBtn
								: styles.categoryBtn
						}
					>
						<MaterialCommunityIcons
							name={item.iconName as any}
							size={20}
							color={activeIndex === index ? Colors.white : Colors.black}
						/>
						<Text
							style={
								activeIndex === index
									? styles.activeCategoryTitle
									: styles.categoryTitle
							}
						>
							{item.title}
						</Text>
					</TouchableOpacity>
				))}
			</ScrollView>
		</View>
	);
};

export default CategoryButton;

const styles = StyleSheet.create({
	title: {
		fontSize: 22,
		fontWeight: "700",
		color: Colors.black,
		marginBottom: 10,
	},
	categoryBtn: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 15,
		paddingHorizontal: 10,
		paddingVertical: 10,
		backgroundColor: Colors.white,
		borderRadius: 10,
		shadowColor: "#333333",
		shadowOffset: { width: 1, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 3,
		elevation: 5,
	},
	activeCategoryBtn: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 15,
		paddingHorizontal: 10,
		paddingVertical: 10,
		backgroundColor: Colors.primaryColor,
		borderRadius: 10,
		shadowColor: "#333333",
		shadowOffset: { width: 1, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 3,
		elevation: 5,
	},
	categoryTitle: {
		marginLeft: 5,
		fontSize: 16,
		color: Colors.black,
	},
	activeCategoryTitle: {
		marginLeft: 5,
		fontSize: 16,
		color: Colors.white,
	},
});
