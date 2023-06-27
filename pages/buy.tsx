import { useContract, useNFTs } from "@thirdweb-dev/react";
import React, { useState, useEffect } from "react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";
import styles from "../styles/Buy.module.css";
import Filter from "../components/Filter/filter";

export default function Buy() {
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const { data, isLoading } = useNFTs(contract);
  const [filters, setFilters] = useState<Record<string, string>>({
    Backgrounds: "",
    Body: "",
    Eyes: "",
    Face: "",
    Mouth: "",
    Nose: "",
    Accessories: "",
  });

  const handleFilterChange = (filterName: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const filterNFTs = (nft: any) => {
    const { attributes } = nft.metadata;
    return (
      (!filters["Backgrounds"] ||
        attributes.find(
          (attr: any) =>
            attr.trait_type === "Backgrounds" &&
            attr.value === filters["Backgrounds"]
        )) &&
      (!filters["Body"] ||
        attributes.find(
          (attr: any) =>
            attr.trait_type === "Body" && attr.value === filters["Body"]
        )) &&
      (!filters["Face"] ||
        attributes.find(
          (attr: any) =>
            attr.trait_type === "Face" && attr.value === filters["Face"]
        )) &&
      (!filters["Nose"] ||
        attributes.find(
          (attr: any) =>
            attr.trait_type === "Nose" && attr.value === filters["Nose"]
        )) &&
      (!filters["Eyes"] ||
        attributes.find(
          (attr: any) =>
            attr.trait_type === "Eyes" && attr.value === filters["Eyes"]
        )) &&
      (!filters["Accessories"] ||
        attributes.find(
          (attr: any) =>
            attr.trait_type === "Accessories" &&
            attr.value === filters["Accessories"]
        )) &&
      (!filters["Mouth"] ||
        attributes.find(
          (attr: any) =>
            attr.trait_type === "Mouth" && attr.value === filters["Mouth"]
        ))
    );
  };

  const filteredData = data?.filter(filterNFTs);
  return (
    <Container maxWidth="lg">
      <div>
        <h1>Buy NFT</h1>
        <p>Browse the NFTs available from the collection.</p>
      </div>

      <div className={styles.filters}>
        <Filter
          label="Background"
          options={Array.from(
            new Set(
              filteredData?.flatMap((nft: any) =>
                nft.metadata.attributes
                  .filter((attr: any) => attr.trait_type === "Backgrounds")
                  .map((attr: any) => attr.value)
              )
            )
          ).sort()}
          value={filters["Backgrounds"]}
          onChange={(value) => handleFilterChange("Backgrounds", value)}
        />
        <Filter
          label="Body"
          options={Array.from(
            new Set(
              filteredData?.flatMap((nft: any) =>
                nft.metadata.attributes
                  .filter((attr: any) => attr.trait_type === "Body")
                  .map((attr: any) => attr.value)
              )
            )
          ).sort()}
          value={filters["Body"]}
          onChange={(value) => handleFilterChange("Body", value)}
        />
        <Filter
          label="Face"
          options={Array.from(
            new Set(
              filteredData?.flatMap((nft: any) =>
                nft.metadata.attributes
                  .filter((attr: any) => attr.trait_type === "Face")
                  .map((attr: any) => attr.value)
              )
            )
          ).sort()}
          value={filters["Face"]}
          onChange={(value) => handleFilterChange("Face", value)}
        />
        <Filter
          label="Nose"
          options={Array.from(
            new Set(
              filteredData?.flatMap((nft: any) =>
                nft.metadata.attributes
                  .filter((attr: any) => attr.trait_type === "Nose")
                  .map((attr: any) => attr.value)
              )
            )
          ).sort()}
          value={filters["Nose"]}
          onChange={(value) => handleFilterChange("Nose", value)}
        />
        <Filter
          label="Eyes"
          options={Array.from(
            new Set(
              filteredData?.flatMap((nft: any) =>
                nft.metadata.attributes
                  .filter((attr: any) => attr.trait_type === "Eyes")
                  .map((attr: any) => attr.value)
              )
            )
          ).sort()}
          value={filters["Eyes"]}
          onChange={(value) => handleFilterChange("Eyes", value)}
        />
        <Filter
          label="Accessories"
          options={Array.from(
            new Set(
              filteredData?.flatMap((nft: any) =>
                nft.metadata.attributes
                  .filter((attr: any) => attr.trait_type === "Accessories")
                  .map((attr: any) => attr.value)
              )
            )
          ).sort()}
          value={filters["Accessories"]}
          onChange={(value) => handleFilterChange("Accessories", value)}
        />
        <Filter
          label="Mouth"
          options={Array.from(
            new Set(
              filteredData?.flatMap((nft: any) =>
                nft.metadata.attributes
                  .filter((attr: any) => attr.trait_type === "Mouth")
                  .map((attr: any) => attr.value)
              )
            )
          ).sort()}
          value={filters["Mouth"]}
          onChange={(value) => handleFilterChange("Mouth", value)}
        />
      </div>

      <NFTGrid data={filteredData} isLoading={isLoading} emptyText={""} />
    </Container>
  );
}
