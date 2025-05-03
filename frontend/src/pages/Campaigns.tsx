// // import {Box, BoxProps, Container, Flex, Select, SimpleGrid, Stack, TextInput, Title, TitleProps} from "@mantine/core";
// // import CampaignsData from "../link/Campaigns";
// // import {CampaignCard} from "../components";
// // import {Helmet} from "react-helmet";
// // import {useMediaQuery} from "@mantine/hooks";

// // const CampaignsPage = (): JSX.Element => {
// //     const matchesMobile = useMediaQuery('(max-width: 768px)');

// //     const boxProps: BoxProps = {
// //         mt: matchesMobile ? 4 : 24,
// //         mb: matchesMobile ? 4 : 48,
// //         py: matchesMobile ? 16 : 24
// //     }

// //     const titleProps: TitleProps = {
// //         size: 32,
// //         weight: 700,
// //         mb: "lg",
// //         transform: 'capitalize',
// //         sx: {lineHeight: '40px'}
// //     }

// //     const items = CampaignsData.getCampaigns().map(c => (<CampaignCard key={c._id} data={c} showActions={true}/>))

// //     return (
// //         <>
// //             <Helmet>
// //                 <title>Discover campaigns to fund</title>
// //             </Helmet>
// //             <Box>
// //                 <Container size="lg">
// //                     <Stack>
// //                         <Box {...boxProps}>
// //                             <Title {...titleProps} align="center">Discover campaigns to fund</Title>
// //                         </Box>
// //                         <Flex
// //                             justify="space-between"
// //                             gap={{base: 'sm', sm: 'lg'}}
// //                             direction={{base: 'column-reverse', sm: 'row'}}
// //                         >
// //                             <TextInput placeholder="search campaigns..." sx={{width: 500}}/>
// //                             <Flex align="center" gap="sm" justify={{base: 'space-between', sm: 'flex-start'}}>
// //                                 <Select
// //                                     label=""
// //                                     placeholder="campaigns in"
// //                                     defaultValue=""
// //                                     data={[
// //                                         {value: '10', label: 'show: 10'},
// //                                         {value: '25', label: 'show: 25'},
// //                                         {value: '50', label: 'show: 50'},
// //                                         {value: '100', label: 'show: 100'},
// //                                     ]}
// //                                 />
// //                                 <Select
// //                                     label=""
// //                                     placeholder="Explore"
// //                                     defaultValue="featured"
// //                                     data={[
// //                                         {value: 'featured', label: 'sort by: featured'},
// //                                         {value: 'popular', label: 'sort by: popular'},
// //                                         {value: 'latest', label: 'sorty by: latest'},
// //                                     ]}
// //                                 />
// //                             </Flex>
// //                         </Flex>
// //                         <SimpleGrid
// //                             cols={3}
// //                             spacing="lg"
// //                             breakpoints={[
// //                                 {maxWidth: 'md', cols: 2, spacing: 'md'},
// //                                 {maxWidth: 'sm', cols: 1, spacing: 0},
// //                             ]}
// //                         >
// //                             {items}
// //                         </SimpleGrid>
// //                     </Stack>
// //                 </Container>
// //             </Box>
// //         </>
// //     );
// // };

// // export default CampaignsPage;
// import {
//     Box,
//     BoxProps,
//     Button,
//     Container,
//     Flex,
//     SimpleGrid,
//     Stack,
//     TextInput,
//     Title,
//     TitleProps
//   } from "@mantine/core";
//   import { IconSearch } from "@tabler/icons-react";
//   import CampaignsData from "../link/Campaigns";
//   import { CampaignCard } from "../components";
//   import { Helmet } from "react-helmet";
//   import { useMediaQuery } from "@mantine/hooks";
//   import { useMemo, useState } from "react";
  
//   const CampaignsPage = (): JSX.Element => {
//     const matchesMobile = useMediaQuery("(max-width: 768px)");
//     const [searchTerm, setSearchTerm] = useState(""); // Saisie utilisateur
//     const [confirmedSearchTerm, setConfirmedSearchTerm] = useState(""); // Recherche confirmée
  
//     const boxProps: BoxProps = {
//       mt: matchesMobile ? 4 : 24,
//       mb: matchesMobile ? 4 : 48,
//       py: matchesMobile ? 16 : 24,
//     };
  
//     const titleProps: TitleProps = {
//       size: 32,
//       weight: 700,
//       mb: "lg",
//       transform: "capitalize",
//       sx: { lineHeight: "40px" },
//     };
  
//     const filteredCampaigns = useMemo(() => {
//       return CampaignsData.getCampaigns().filter((c) =>
//         c.title.toLowerCase().includes(confirmedSearchTerm.toLowerCase()) ||
//         c.description.toLowerCase().includes(confirmedSearchTerm.toLowerCase())
//       );
//     }, [confirmedSearchTerm]);
  
//     const handleSearch = () => {
//       setConfirmedSearchTerm(searchTerm.trim());
//     };
  
//     const items = filteredCampaigns.map((c) => (
//       <CampaignCard key={c._id} data={c} showActions={true} />
//     ));
  
//     return (
//       <>
//         <Helmet>
//           <title>Discover campaigns to fund</title>
//         </Helmet>
//         <Box>
//           <Container size="lg">
//             <Stack>
//               <Box {...boxProps}>
//                 <Title {...titleProps} align="center">
//                   Discover campaigns to fund
//                 </Title>
//               </Box>
//               <Flex
//                 justify="space-between"
//                 gap={{ base: "sm", sm: "lg" }}
//                 direction={{ base: "column-reverse", sm: "row" }}
//               >
//                 <Flex gap="xs">
//                   <TextInput
//                     placeholder="Search campaigns..."
//                     sx={{ width: 300 }}
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.currentTarget.value)}
//                   />
//                   <Button onClick={handleSearch} variant="light">
//                     <IconSearch size={18} />
//                   </Button>
//                 </Flex>
//               </Flex>
//               <SimpleGrid
//                 cols={3}
//                 spacing="lg"
//                 breakpoints={[
//                   { maxWidth: "md", cols: 2, spacing: "md" },
//                   { maxWidth: "sm", cols: 1, spacing: 0 },
//                 ]}
//               >
//                 {items}
//               </SimpleGrid>
//             </Stack>
//           </Container>
//         </Box>
//       </>
//     );
//   };
  
//   export default CampaignsPage;
  
import {
    Box,
    BoxProps,
    Button,
    Container,
    Flex,
    SimpleGrid,
    Stack,
    TextInput,
    Title,
    TitleProps,
  } from "@mantine/core";
  import { IconSearch } from "@tabler/icons-react";
  import CampaignsData from "../link/Campaigns";
  import { CampaignCard } from "../components";
  import { Helmet } from "react-helmet";
  import { useMediaQuery } from "@mantine/hooks";
  import { useMemo, useState } from "react";
  import { useNavigate, useSearchParams } from "react-router-dom";
  import CategorySelect from "../components/CategorySelect";
  
  const CampaignsPage = (): JSX.Element => {
    const matchesMobile = useMediaQuery("(max-width: 768px)");
    const [searchTerm, setSearchTerm] = useState("");
    const [confirmedSearchTerm, setConfirmedSearchTerm] = useState("");
  
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const categoryParam = searchParams.get("category")?.toLowerCase() || "";
  
    const filteredCampaigns = useMemo(() => {
      return CampaignsData.getCampaigns().filter((c) => {
        const matchSearch =
          c.title.toLowerCase().includes(confirmedSearchTerm.toLowerCase()) ||
          c.description.toLowerCase().includes(confirmedSearchTerm.toLowerCase());
  
        const matchCategory = categoryParam
          ? c.category.toLowerCase() === categoryParam
          : true;
  
        return matchSearch && matchCategory;
      });
    }, [confirmedSearchTerm, categoryParam]);
  
    const handleSearch = () => {
      setConfirmedSearchTerm(searchTerm.trim());
    };
  
    const handleCategoryChange = (value: string | null) => {
      if (value) {
        navigate(`/campaigns?category=${encodeURIComponent(value)}`);
      } else {
        navigate("/campaigns");
      }
    };
  
    const items = filteredCampaigns.map((c) => (
      <CampaignCard key={c._id} data={c} showActions={true} />
    ));
  
    const boxProps: BoxProps = {
      mt: matchesMobile ? 4 : 24,
      mb: matchesMobile ? 4 : 48,
      py: matchesMobile ? 16 : 24,
    };
  
    const titleProps: TitleProps = {
      size: 32,
      weight: 700,
      mb: "lg",
      transform: "capitalize",
      sx: { lineHeight: "40px" },
    };
  
    return (
      <>
        <Helmet>
          <title>Discover campaigns to fund</title>
        </Helmet>
        <Box>
          <Container size="lg">
            <Stack>
              <Box {...boxProps}>
                <Title {...titleProps} align="center">
                  Discover campaigns to fund
                </Title>
              </Box>
  
              <Flex
                justify="space-between"
                gap={{ base: "sm", sm: "lg" }}
                direction={{ base: "column-reverse", sm: "row" }}
              >
                <Flex gap="xs">
                  <TextInput
                    placeholder="Search campaigns..."
                    sx={{ width: 300 }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.currentTarget.value)}
                  />
                  <Button onClick={handleSearch} variant="light">
                    <IconSearch size={18} />
                  </Button>
                </Flex>
  
                <CategorySelect onChange={handleCategoryChange} value={searchParams.get("category")} />
              </Flex>
  
              <SimpleGrid
                cols={3}
                spacing="lg"
                breakpoints={[
                  { maxWidth: "md", cols: 2, spacing: "md" },
                  { maxWidth: "sm", cols: 1, spacing: 0 },
                ]}
              >
                {items}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>
      </>
    );
  };
  
  export default CampaignsPage;
  