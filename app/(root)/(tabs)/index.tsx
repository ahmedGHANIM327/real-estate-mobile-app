import { View, Image, Text } from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useGlobalContext} from "@/lib/global-provider";
import {Redirect} from "expo-router";
import icons from "@/constants/icons";
import Search from "@/components/Search";

export default function Index() {

    const { isLogged, user } = useGlobalContext();
    if (!isLogged) return <Redirect href="/sign-in" />;

  return (
    <SafeAreaView className="h-full bg-white">
        <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
                <View className="flex flex-row">
                    <Image
                        source={{ uri: user?.avatar }}
                        className="size-12 rounded-full"
                    />

                    <View className="flex flex-col items-start ml-2 justify-center">
                        <Text className="text-xs font-rubik text-black-100">
                            Good Morning
                        </Text>
                        <Text className="text-base font-rubik-medium text-black-300">
                            {user?.name}
                        </Text>
                    </View>
                </View>
                <Image source={icons.bell} className="size-6" />
            </View>

            <Search />

        </View>
    </SafeAreaView>
  );
}
