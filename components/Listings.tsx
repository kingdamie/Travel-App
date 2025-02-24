import {
	FlatList,
	Image,
	ListRenderItem,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "@/constants/Colors";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import ListingType from "@/types/listingType";


type Props = {
	listings: any[];
	category: string;
};

const Listings = ({ listings, category }: Props) => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
		}, 200);
	}, [category]);

	const renderItems: ListRenderItem<ListingType> = ({ item }) => {
		return (
			// @ts-ignore
			<Link href={`/listing/${item.id}`} asChild>
				<TouchableOpacity onPress={() => {}}>
					<View style={styles.item}>
						<Image source={{ uri: item.image }} style={styles.itemImage} />
						<View style={styles.bookmark}>
							<Ionicons
								name="bookmark-outline"
								color={Colors.white}
								size={20}
							/>
						</View>
						<Text style={styles.itemTxt} numberOfLines={1} ellipsizeMode="tail">
							{item.name}
						</Text>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<View
								style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
							>
								<FontAwesome5
									name="map-marker-alt"
									size={18}
									color={Colors.primaryColor}
								/>
								<Text style={styles.itemLocationTxt}>{item.location}</Text>
							</View>
							<Text style={styles.itemPriceTxt}>${item.price}</Text>
						</View>
					</View>
				</TouchableOpacity>
			</Link>
		);
	};

	return (
		<View>
			<FlatList
				data={loading ? [] : listings}
				renderItem={renderItems}
				horizontal
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

export default Listings;

const styles = StyleSheet.create({
	item: {
		backgroundColor: Colors.white,
		padding: 10,
		borderRadius: 10,
		marginRight: 20,
		width: 220,
	},
	itemImage: {
		width: 200,
		height: 200,
		borderRadius: 10,
		marginBottom: 30,
	},
	bookmark: {
		position: "absolute",
		top: 185,
		right: 30,
		backgroundColor: Colors.primaryColor,
		padding: 10,
		borderRadius: 30,
		borderWidth: 2,
		borderColor: Colors.white,
	},
	itemTxt: {
		fontSize: 16,
		fontWeight: "600",
		color: Colors.black,
		marginBottom: 10,
	},
	itemLocationTxt: {
		fontSize: 12,
	},
	itemPriceTxt: {
		fontSize: 12,
		fontWeight: "600",
		color: Colors.primaryColor,
	},
});
