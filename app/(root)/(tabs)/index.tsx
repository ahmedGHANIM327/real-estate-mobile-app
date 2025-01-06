import {View, Image, Text, TouchableOpacity, FlatList} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useGlobalContext} from "@/lib/global-provider";
import {Redirect} from "expo-router";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import Filters from "@/components/Filters";
import NoResults from "@/components/NoResults";
import {Card} from "@/components/Card";

export default function Index() {

    const { isLogged, user } = useGlobalContext();
    if (!isLogged) return <Redirect href="/sign-in" />;

  return (
    <SafeAreaView className="h-full bg-white">
        <FlatList
          data={[]}
          numColumns={2}
          renderItem={({ item }) => (
              <Card />
          )}
          keyExtractor={(item) => item.$id}
          contentContainerClassName="pb-32"
          columnWrapperClassName="flex gap-5 px-5"
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<NoResults />}
          ListHeaderComponent={() => (
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

                  <View className="my-5">
                      <View className="flex flex-row items-center justify-between">
                          <Text className="text-xl font-rubik-bold text-black-300">
                              Featured
                          </Text>
                          <TouchableOpacity>
                              <Text className="text-base font-rubik-bold text-primary-300">
                                  See all
                              </Text>
                          </TouchableOpacity>
                      </View>


                  </View>

                  <View className="mt-5">
                      <View className="flex flex-row items-center justify-between">
                          <Text className="text-xl font-rubik-bold text-black-300">
                              Our Recommendation
                          </Text>
                          <TouchableOpacity>
                              <Text className="text-base font-rubik-bold text-primary-300">
                                  See all
                              </Text>
                          </TouchableOpacity>
                      </View>

                      <Filters />
                  </View>

              </View>
          )}
        />
    </SafeAreaView>
  );
}
