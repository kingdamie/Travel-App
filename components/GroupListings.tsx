import {
	FlatList,
	Image,
	ListRenderItem,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

interface GroupListingsType {
	id: string;
	name: string;
	image: string;
	rating: string;
	reviews: string;
}

type Props = {
	groups: any[];
};

const GroupListings = ({ groups }: Props) => {
	const renderItem: ListRenderItem<GroupListingsType> = ({ item }) => {
		return (
			<View style={styles.groupswrapper}>
				<Image source={{ uri: item.image }} style={styles.groupsImage} />
				<View>
					<Text
						style={{
							fontSize: 14,
							fontWeight: "600",
							color: Colors.black,
							marginBottom: 8,
						}}
					>
						{item.name}
					</Text>
					<View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
						<Ionicons name="star" size={20} color={Colors.primaryColor} />
						<Text
							style={{
								fontSize: 14,
								fontWeight: "600",
								color: Colors.black,
							}}
						>
							{item.rating}
						</Text>
						<Text
							style={{
								fontSize: 14,
								fontWeight: "600",
								color: "#999",
							}}
						>
							{item.reviews}
						</Text>
					</View>
				</View>
			</View>
		);
	};
	return (
		<View style={{marginVertical:20, }}>
			<Text style={styles.title}>Top Travel Groups</Text>
			<FlatList
				data={groups}
				renderItem={renderItem}
				horizontal
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

export default GroupListings;

const styles = StyleSheet.create({
    title:{
        fontSize:22,
        marginVertical: 10,
        color: Colors.black,
        fontWeight: '600',
    },
	groupswrapper: {
		backgroundColor: Colors.white,
		padding: 10,
		borderRadius: 10,
		marginRight: 20,
        flexDirection: 'row',
        gap:5,
        alignItems: 'center'
	},
	groupsImage: { width: 80, height: 100, borderRadius: 10 },
});
