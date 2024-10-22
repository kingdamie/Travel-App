import {
	Dimensions,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import ListingType from "@/types/listingType";
import listingData from "@/data/destination.json";
import { Feather, Ionicons, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

// Get the width of the screen
const { width } = Dimensions.get("window");
const IMG_HEIGHT = 300;

const ListingDetails = () => {
	const { id } = useLocalSearchParams();

	// Ensure that 'id' is a string and find the listing
	// @ts-ignore
	const listing: ListingType | undefined = (listingData as ListingType[]).find(
		(item) => item.id == id
	);

	// If no listing is found, handle it
	if (!listing) {
		return (
			<View>
				<Text>Listing not found.</Text>
			</View>
		);
	}

	const router = useRouter();

	return (
		<>
			<Stack.Screen
				options={{
					headerTransparent: true,
					headerTitle: "",
					headerLeft: () => {
						return (
							<TouchableOpacity
								onPress={() => router.back()}
								style={{
									backgroundColor: "rgba(225, 225, 255, 0.5)",
									borderRadius: 10,
									padding: 4,
									marginLeft: 10,
								}}
							>
								<View
									style={{
										backgroundColor: Colors.white,
										borderRadius: 10,
										padding: 6,
									}}
								>
									<Feather name="arrow-left" size={20} />
								</View>
							</TouchableOpacity>
						);
					},
					headerRight: () => {
						return (
							<TouchableOpacity
								onPress={() => {}}
								style={{
									backgroundColor: "rgba(225, 225, 255, 0.5)",
									borderRadius: 10,
									padding: 4,
									marginRight: 10,
								}}
							>
								<View
									style={{
										backgroundColor: Colors.white,
										borderRadius: 10,
										padding: 6,
									}}
								>
									<Ionicons name="bookmark-outline" size={20} />
								</View>
							</TouchableOpacity>
						);
					},
				}}
			/>
			<View style={styles.container}>
				<Image source={{ uri: listing.image }} style={styles.image} />
				<View style={styles.containerWrap}>
					<Text style={styles.name}>{listing.name}</Text>
					<View style={styles.LocationWrap}>
						<FontAwesome5
							name="map-marker-alt"
							size={18}
							color={Colors.primaryColor}
						/>
						<Text style={styles.itemLocationTxt}>{listing.location}</Text>
					</View>

					<View style={styles.hightlightWrap}>
						{/* for duration  */}
						<View style={{ flexDirection: "row" }}>
							<View style={styles.hightlightIcon}>
								<Ionicons name="time" size={18} color={Colors.primaryColor} />
							</View>

							<View>
								<Text style={styles.DurationTxt}>Duration</Text>
								<Text style={styles.DurationContent}>{listing.duration}</Text>
							</View>
						</View>

						{/* for person  */}

						<View style={{ flexDirection: "row" }}>
							<View style={styles.hightlightIcon}>
								<FontAwesome
									name="users"
									size={18}
									color={Colors.primaryColor}
								/>
							</View>

							<View>
								<Text style={styles.DurationTxt}>Person</Text>
								<Text style={styles.DurationContent}>{listing.id}</Text>
							</View>
						</View>

						{/* for Rating  */}
						<View style={{ flexDirection: "row" }}>
							<View style={styles.hightlightIcon}>
								<Ionicons name="star" size={18} color={Colors.primaryColor} />
							</View>

							<View>
								<Text style={styles.DurationTxt}>Ratings</Text>
								<Text style={styles.DurationContent}>{listing.rating}</Text>
							</View>
						</View>
					</View>

					<Text style={styles.listingDetails}>{listing.description}</Text>
				</View>
			</View>
		</>
	);
};

export default ListingDetails;

const styles = StyleSheet.create({
	image: {
		width: width,
		height: IMG_HEIGHT,
	},
	container: {
		flex: 1,
		backgroundColor: Colors.white,
	},
	containerWrap: {
		padding: 10,
	},
	name: {
		fontSize: 24,
		fontWeight: "500",
		color: Colors.black,
		letterSpacing: 0.8,
	},
	itemLocationTxt: {
		fontSize: 14,
		color: Colors.black,
	},
	hightlightWrap: {
		flexDirection: "row",
		marginVertical: 28,
		alignItems: "center",
		justifyContent: "space-around",
	},
	hightlightIcon: {
		backgroundColor: "#F4F4f4",
		paddingHorizontal: 8,
		paddingVertical: 5,
		borderRadius: 8,
		marginRight: 5,
	},
	LocationWrap: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
		marginBottom: 10,
		marginTop: 1,
	},
	DurationTxt: {
		fontSize: 12,
		color: "#999",
	},
	DurationContent: {
		fontSize: 14,
		fontWeight: "600",
	},
	listingDetails: {
        fontSize:18,
        color: Colors.black,
        lineHeight:25,
        letterSpacing: 0.5,
    },
});
