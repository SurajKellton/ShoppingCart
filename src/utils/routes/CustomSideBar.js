import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { List, Divider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppConstants from '../appConstants/AppConstants';
import Url from '../appConstants/ImageUrl';

export function DrawerContent(props) {
    const [expandedForSummer, setExpandedForSummer] = useState(false);
    const [expandedWinter, setExpandedForWinter] = useState(false);
    const handlePressForSummer = () => setExpandedForSummer(!expandedForSummer);
    const handlePressForWinter = () => setExpandedForWinter(!expandedWinter);
    const { SUBCATEGORY } = AppConstants;
    const { CAP, KURTA, PAJAMA, PANTS, SHIRT, SUNGLASSES, TSHIRT, JACKET, SHOES, SWEATER, WINTER, SUMMER } = AppConstants.SCREENTITLE;
    const { summer, winter, upArrow, downArrow } = Url.imageUrl;
    const { navigation } = props;
    return (
        <SafeAreaView style={{flex:1}}>
        <ScrollView style={{ flex: 1 }}>
            <List.Accordion
                title={SUMMER}
                style={styles.listSection}
                expandedForSummer={expandedForSummer}
                onPress={handlePressForSummer}
                left={() => <List.Icon icon={summer} />}
                right={() => <List.Icon icon={expandedForSummer? downArrow: upArrow} />}
            >
                <Divider />
                <List.Item
                    style={styles.listItem}
                    title={CAP}
                    onPress={() => navigation.navigate(SUBCATEGORY, { subCategory: CAP })} />
                <List.Item
                    style={styles.listItem}
                    title={KURTA}
                    onPress={() => navigation.navigate(SUBCATEGORY, { subCategory: KURTA })} />
                <List.Item
                    style={styles.listItem}
                    title={PANTS}
                    onPress={() => navigation.navigate(SUBCATEGORY, { subCategory: PANTS })} />
                <List.Item
                    style={styles.listItem}
                    title={SHIRT}
                    onPress={() => navigation.navigate(SUBCATEGORY, { subCategory: SHIRT })} />
                <List.Item
                    style={styles.listItem}
                    title={SUNGLASSES}
                    onPress={() => navigation.navigate(SUBCATEGORY, { subCategory: SUNGLASSES })} />
                <List.Item
                    style={styles.listItem}
                    title={TSHIRT}
                    onPress={() => navigation.navigate(SUBCATEGORY, { subCategory: TSHIRT })} />
            </List.Accordion>
            <List.Accordion
                title={WINTER}
                id={2}
                style={styles.listSection}
                expanded={expandedWinter}
                onPress={handlePressForWinter}
                left={() => <List.Icon icon={winter} />}
                right={() => <List.Icon icon={expandedWinter? downArrow: upArrow} />}>
                <List.Item
                    style={styles.listItem}
                    title={JACKET}
                    onPress={() => navigation.navigate(SUBCATEGORY, { subCategory: JACKET })} />
                <List.Item
                    style={styles.listItem}
                    title={PAJAMA}
                    onPress={() => navigation.navigate(SUBCATEGORY, { subCategory: PAJAMA })} />
                <List.Item
                    style={styles.listItem}
                    title={SHOES}
                    onPress={() => navigation.navigate(SUBCATEGORY, { subCategory: SHOES })} />
                <List.Item
                    style={styles.listItem}
                    title={SWEATER}
                    onPress={() => navigation.navigate(SUBCATEGORY, { subCategory: SWEATER })} />
            </List.Accordion>
        </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    listSection: {
        height: 50,
        justifyContent: 'center',
    },
    arrow: {
        height: 20,
        width: 20,
    },
    listItem: {
        height: 35,
        padding: -20,
        justifyContent: 'center',
    }
})
