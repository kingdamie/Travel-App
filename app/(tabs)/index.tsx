import {
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	TextInput,
	ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useHeaderHeight } from "@react-navigation/elements";
import CategoryButton from "@/components/CategoryButton";
import Listings from "@/components/Listings";
import listingData from "@/data/destination.json";
import GroupListings from "@/components/GroupListings";
import groupsData from "@/data/groups.json";

const index = () => {
	const headerHeight = useHeaderHeight();

	const [category, setCategory] = useState("All");

	const onCatChanged = (category: string) => {
		setCategory(category);
	};
	return (
		<>
			{/* header  */}
			<Stack.Screen
				options={{
					headerTransparent: true,
					headerTitle: "",
					headerLeft: () => {
						return (
							<TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
								<Image
									source={require("@/assets/smallicon.png")}
									style={{ width: 40, height: 40, borderRadius: 10 }}
								/>
							</TouchableOpacity>
						);
					},
					headerRight: () => {
						return (
							<TouchableOpacity
								onPress={() => {}}
								style={{
									marginRight: 20,
									backgroundColor: Colors.white,
									padding: 10,
									borderRadius: 10,
									shadowColor: "#171717",
									shadowOffset: { width: 2, height: 4 },
									shadowOpacity: 0.2,
									shadowRadius: 3,
									elevation: 5,
								}}
							>
								<Ionicons name="notifications" size={20} color={Colors.black} />
							</TouchableOpacity>
						);
					},
				}}
			/>
			{/* main content */}
			<View style={[styles.container, { paddingTop: headerHeight }]}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<Text style={styles.headingTxt}>Explore The Beautiful World!</Text>
					{/* wrapper for the search section  */}
					<View style={styles.searchSectionContainer}>
						<View style={styles.searchBar}>
							<Ionicons
								name="search"
								size={18}
								style={{ marginRight: 5, color: Colors.black }}
							/>
							<TextInput
								placeholder="Search..."
								style={styles.textInput}
								underlineColorAndroid="transparent"
							/>
						</View>
						<TouchableOpacity onPress={() => {}}>
							<Ionicons name="options" size={28} style={styles.filterBtn} />
						</TouchableOpacity>
					</View>

					<CategoryButton onCategoryChanged={onCatChanged} />

					<Listings listings={listingData} category={category} />

					<GroupListings groups={groupsData} />
				</ScrollView>
			</View>
		</>
	);
};

export default index;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		backgroundColor: Colors.bgColor,
	},
	headingTxt: {
		fontSize: 28,
		fontWeight: "800",
		color: Colors.black,
		marginTop: 10,
	},
	searchSectionContainer: {
		flexDirection: "row",
		marginVertical: 20,
	},
	searchBar: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: Colors.white,
		padding: 16,
		borderRadius: 10,
	},
	textInput: {
		flex: 1,
		fontSize: 16,
		color: Colors.black,
		borderWidth: 0,
	},
	filterBtn: {
		backgroundColor: Colors.primaryColor,
		padding: 12,
		borderRadius: 10,
		marginLeft: 20,
	},
});
