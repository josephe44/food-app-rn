import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResult();

  const filterResultsByPrice = (price) => {
    // price === "$" || "$$" || "$$$"
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.container}>
      {/* you can use the empty element if you are throwing multiple element into the screen <></> */}
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />

      {errorMessage ? null : <Text>{errorMessage}</Text>}
      {/* <Text>we have found {results.length} results</Text> */}
      <ScrollView>
        <ResultList
          title="Cost Effective"
          result={filterResultsByPrice("$")}
         
        />
        <ResultList
          title="Bit Pricier"
          result={filterResultsByPrice("$$")}
          
        />
        <ResultList
          title="Big Spender"
          result={filterResultsByPrice("$$$")}
          
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchScreen;
