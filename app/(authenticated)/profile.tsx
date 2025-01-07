import React, {useEffect, useState} from 'react';
import {View, Text, Animated, ActivityIndicator, SafeAreaView, FlatList, RefreshControl} from 'react-native';
import {useQuery} from "@tanstack/react-query";
import {Queries} from "@/queries/queries";
import UsersService from "@/services/usersService";
import {Urls} from "@/constants/urls";
import ScrollView = Animated.ScrollView;

export default function ProfileScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const {data, refetch, isSuccess, isFetching, isRefetching} = useQuery({
    queryKey: [Queries.USERS],
    queryFn: () => UsersService.getUsersData({url: Urls.UsersData})
  });

  useEffect(() => {
    setRefreshing(false)
  }, [data]);

  if (isSuccess && refreshing) {
    setRefreshing(false) }

  return (
    <SafeAreaView className="h-full">
      {(isFetching && !refreshing) ? <View className="flex-1 justify-center items-center"><ActivityIndicator /></View> :
        <ScrollView
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => {
            setRefreshing(true)
            refetch();
          }} />}
        >
          {data && data.map((user: any) => (
            <View key={user.id} className="flex-1 justify-center items-center bg-white">
              <Text>{user.name}</Text>
            </View>
          ))}
        </ScrollView>}
    </SafeAreaView>
  );
}
