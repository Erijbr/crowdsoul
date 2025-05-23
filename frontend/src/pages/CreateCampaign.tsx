// // import {Helmet} from "react-helmet";
// // import {
// //     ActionIcon,
// //     Alert,
// //     Anchor,
// //     Box,
// //     Button,
// //     Checkbox,
// //     Container,
// //     Flex,
// //     Group,
// //     NumberInput,
// //     Paper,
// //     PaperProps,
// //     Radio,
// //     SegmentedControl,
// //     Select,
// //     SimpleGrid,
// //     Stack,
// //     Stepper,
// //     Text,
// //     TextInput,
// //     Title,
// //     TitleProps,
// //     useMantineTheme
// // } from "@mantine/core";
// // import {Link, RichTextEditor} from '@mantine/tiptap';
// // import {useEditor} from '@tiptap/react';
// // import Highlight from '@tiptap/extension-highlight';
// // import StarterKit from '@tiptap/starter-kit';
// // import Underline from '@tiptap/extension-underline';
// // import TextAlign from '@tiptap/extension-text-align';
// // import Superscript from '@tiptap/extension-superscript';
// // import SubScript from '@tiptap/extension-subscript';
// // import React, {forwardRef, useState} from "react";
// // import {DateInput} from "@mantine/dates";
// // import {
// //     IconBrandApple,
// //     IconBrandFacebook,
// //     IconBrandGoogle,
// //     IconBrandLinkedin,
// //     IconBrandPaypal,
// //     IconBrandTwitter,
// //     IconBrandWhatsapp,
// //     IconBrandYoutube,
// //     IconCalendar,
// //     IconCheck,
// //     IconChevronLeft,
// //     IconChevronRight,
// //     IconCurrency,
// //     IconCurrencyDollar,
// //     IconInfoCircleFilled,
// //     IconLink,
// //     IconMail,
// //     IconPlus,
// //     IconTrash
// // } from "@tabler/icons-react";
// // import {CategorySelect, CountrySelect, CurrencySelect, FileDropzone} from "../components";
// // import {randomId} from "@mantine/hooks";
// // import {useForm} from "@mantine/form";

// // interface ISocialProps {
// //     icon: React.FC<any>;
// //     title: React.ReactNode;
// // }

// // const SocialSelectItem = forwardRef<HTMLDivElement, ISocialProps>(
// //     ({title, icon: Icon, ...others}: ISocialProps, ref) => (
// //         <div ref={ref} {...others}>
// //             <Group noWrap>
// //                 <Icon size={18} stroke={1.5}/>
// //                 <Text size="sm" transform="capitalize">{title}</Text>
// //             </Group>
// //         </div>
// //     )
// // );

// // const CreateCampaignPage = () => {
// //     const theme = useMantineTheme()
// //     const [active, setActive] = useState(0);
// //     const [target, setTarget] = useState('deadline');
// //     const [deadlineDate, setDeadlineDate] = useState<Date | null>(null);
// //     const [donationType, setDonationType] = useState('any');
// //     const [minimumCheck, setMinimumCheck] = useState(false);
// //     const editor = useEditor({
// //         extensions: [
// //             StarterKit,
// //             Underline,
// //             Link,
// //             Superscript,
// //             SubScript,
// //             Highlight,
// //             TextAlign.configure({types: ['heading', 'paragraph']}),
// //         ],
// //         content: '',
// //     });

// //     const socialForm = useForm({
// //         initialValues: {
// //             employees: [{name: '', active: false, key: randomId()}],
// //         },
// //     });

// //     const nextStep = () => setActive((current: number) => (current < 4 ? current + 1 : current));
// //     const prevStep = () => setActive((current: number) => (current > 0 ? current - 1 : current));

// //     const socialFields = socialForm.values.employees.map((item, index) => (
// //         <Group key={item.key} mt="xs">
// //             <Select
// //                 aria-label="social"
// //                 data={
// //                     [
// //                         {title: 'Facebook', icon: IconBrandFacebook},
// //                         {title: 'Whatsapp', icon: IconBrandWhatsapp},
// //                         {title: 'LinkedIn', icon: IconBrandLinkedin},
// //                         {title: 'Twitter', icon: IconBrandTwitter},
// //                         {title: 'Youtube', icon: IconBrandYoutube},
// //                         {title: 'Other links', icon: IconLink},
// //                     ].map(c => ({value: c.title, label: c.title, ...c}))}
// //                 itemComponent={SocialSelectItem}
// //             />
// //             <TextInput
// //                 placeholder="https://"
// //                 sx={{flex: 1}}
// //                 {...socialForm.getInputProps(`employees.${index}.name`)}
// //             />
// //             <ActionIcon color="red" onClick={() => socialForm.removeListItem('employees', index)}>
// //                 <IconTrash size="1rem"/>
// //             </ActionIcon>
// //         </Group>
// //     ));

// //     const titleProps: TitleProps = {
// //         size: 24,
// //         mb: "md"
// //     }

// //     const subTitleProps: TitleProps = {
// //         size: 18,
// //         mb: "sm"
// //     }

// //     const paperProps: PaperProps = {
// //         p: "md",
// //         withBorder: false,
// //         shadow: 'sm',
// //         mb: "md",
// //         sx: {backgroundColor: theme.white}
// //     }

// //     return (
// //         <>
// //             <Helmet>
// //                 <title>Create campaign</title>
// //             </Helmet>
// //             <Box>
// //                 <Container my={36}>
// //                     <Title mb="xl" align="center">Create your campaign</Title>
// //                     <Stepper active={active} onStepClick={setActive} breakpoint="sm">
// //                         <Stepper.Step
// //                             label="Get started"
// //                             description="Set essential fundraiser details such as fundraiser title, target and currency"
// //                         >
// //                             <Title {...titleProps}>Campaign information</Title>
// //                             <Paper {...paperProps}>
// //                                 <SimpleGrid cols={2} breakpoints={[{maxWidth: 'sm', cols: 1}]}>
// //                                     <TextInput label="Title"/>
// //                                     <CategorySelect/>
// //                                 </SimpleGrid>
// //                             </Paper>
// //                             <Paper {...paperProps}>
// //                                 <Title {...subTitleProps}>Campaign location</Title>
// //                                 <Text size="sm" mb="sm">Please select the country that we&apos;ll be sending funds to
// //                                     (typically where you&apos;re resident). This helps match you to the correct payment
// //                                     processors.</Text>
// //                                 <SimpleGrid cols={2} breakpoints={[{maxWidth: 'sm', cols: 1}]}>
// //                                     <CountrySelect/>
// //                                     <TextInput label="City" placeholder="city"/>
// //                                 </SimpleGrid>
// //                             </Paper>
// //                             <Paper {...paperProps}>
// //                                 <Stack spacing="sm">
// //                                     <Title {...subTitleProps}>Donation information</Title>
// //                                     <CurrencySelect/>
// //                                     <Radio.Group
// //                                         label="What kind of fundraiser would you like to create?"
// //                                         value={target}
// //                                         onChange={setTarget}
// //                                     >
// //                                         <Group mt="xs">
// //                                             <Radio value="deadline" label="Fundraiser with a specific end date?"/>
// //                                             <Radio value="no-deadline" label="Ongoing (no deadline) fundraiser?"/>
// //                                         </Group>
// //                                     </Radio.Group>
// //                                     <Paper {...paperProps}>
// //                                         {target === 'deadline' ?
// //                                             <Stack spacing="xs">
// //                                                 <Text size="sm">Fundraiser with a specific end date?</Text>
// //                                                 <Text size="sm">This creates urgency and should always be used when
// //                                                     money is needed before a certain time.</Text>
// //                                                 <DateInput
// //                                                     value={deadlineDate}
// //                                                     onChange={setDeadlineDate}
// //                                                     label="Deadline"
// //                                                     placeholder="Date input"
// //                                                     icon={<IconCalendar size={18}/>}
// //                                                 />
// //                                                 <NumberInput
// //                                                     label="Target amount"
// //                                                     icon={<IconCurrencyDollar size={18}/>}/>
// //                                                 <Checkbox
// //                                                     label="Allow your fundraiser to be funded over the needed amount?"/>
// //                                             </Stack> :
// //                                             <Stack spacing="xs">
// //                                                 <Text size="sm">Ongoing (no deadline) fundraiser?</Text>
// //                                                 <Text size="sm">This should be used if you are collecting money on a
// //                                                     regular
// //                                                     basis.</Text>
// //                                                 <Checkbox
// //                                                     checked={minimumCheck}
// //                                                     onChange={(event) => setMinimumCheck(event.currentTarget.checked)}
// //                                                     label="Select this if you would like to set a specific a minimum financial target"/>
// //                                                 {minimumCheck &&
// //                                                     <NumberInput
// //                                                         label="Target amount"
// //                                                         icon={<IconCurrencyDollar size={18}/>}
// //                                                     />}
// //                                             </Stack>}
// //                                     </Paper>
// //                                 </Stack>
// //                             </Paper>
// //                             <Paper {...paperProps}>
// //                                 <Title {...subTitleProps}>Donation type</Title>
// //                                 <SegmentedControl
// //                                     size="md"
// //                                     value={donationType}
// //                                     onChange={setDonationType}
// //                                     data={[
// //                                         {label: 'Any (popular option)', value: 'any'},
// //                                         {label: 'Minimum', value: 'minimum'},
// //                                         {label: 'Fixed', value: 'fixed'},
// //                                     ]}
// //                                     mb="sm"
// //                                 />
// //                                 {donationType === 'minimum' ?
// //                                     <NumberInput label="Minimum amount(s)"/> :
// //                                     <NumberInput label="Fixed amount(s)"/>}
// //                                 <Checkbox
// //                                     label="Would you like your fundraising page shown in more than one language?"
// //                                     mt="sm"
// //                                 />
// //                             </Paper>
// //                             <Paper {...paperProps}>
// //                                 <Stack spacing="sm">
// //                                     <Title {...subTitleProps}>Fund & Registration details</Title>
// //                                     <Text size="sm">*Name of the person receiving funds. For organizations, the legal
// //                                         representative
// //                                         name (this can be amended later).</Text>
// //                                     <SimpleGrid cols={2} breakpoints={[{maxWidth: 'sm', cols: 1}]}>
// //                                         <TextInput label="First name"/>
// //                                         <TextInput label="Last name"/>
// //                                     </SimpleGrid>
// //                                     <FileDropzone
// //                                         label="Upload your profile picture"
// //                                         description="This picture will be shown next to your name"
// //                                     />
// //                                     <Checkbox label={
// //                                         <>
// //                                             I agree to the CrowdUp{' '}
// //                                             <Anchor href="#" target="_blank">
// //                                                 terms and conditions & privacy policy
// //                                             </Anchor>
// //                                         </>
// //                                     }/>
// //                                 </Stack>
// //                             </Paper>
// //                         </Stepper.Step>
// //                         <Stepper.Step
// //                             label="Campaign story"
// //                             description="Tell your story! Add your description, images, videos and more">
// //                             <Title {...titleProps}>
// //                                 Your campaign story
// //                             </Title>
// //                             <Paper {...paperProps}>
// //                                 <Stack spacing="sm">
// //                                     <Text size="sm">Explain why you&apos;re raising money, what the funds will be used
// //                                         for, and
// //                                         how much you value the support</Text>
// //                                     <RichTextEditor editor={editor}>
// //                                         <RichTextEditor.Toolbar sticky stickyOffset={60}>
// //                                             <RichTextEditor.ControlsGroup>
// //                                                 <RichTextEditor.Bold/>
// //                                                 <RichTextEditor.Italic/>
// //                                                 <RichTextEditor.Underline/>
// //                                                 <RichTextEditor.Strikethrough/>
// //                                                 <RichTextEditor.ClearFormatting/>
// //                                                 <RichTextEditor.Highlight/>
// //                                                 <RichTextEditor.Code/>
// //                                             </RichTextEditor.ControlsGroup>

// //                                             <RichTextEditor.ControlsGroup>
// //                                                 <RichTextEditor.H1/>
// //                                                 <RichTextEditor.H2/>
// //                                                 <RichTextEditor.H3/>
// //                                                 <RichTextEditor.H4/>
// //                                             </RichTextEditor.ControlsGroup>

// //                                             <RichTextEditor.ControlsGroup>
// //                                                 <RichTextEditor.Blockquote/>
// //                                                 <RichTextEditor.Hr/>
// //                                                 <RichTextEditor.BulletList/>
// //                                                 <RichTextEditor.OrderedList/>
// //                                                 <RichTextEditor.Subscript/>
// //                                                 <RichTextEditor.Superscript/>
// //                                             </RichTextEditor.ControlsGroup>

// //                                             <RichTextEditor.ControlsGroup>
// //                                                 <RichTextEditor.Link/>
// //                                                 <RichTextEditor.Unlink/>
// //                                             </RichTextEditor.ControlsGroup>

// //                                             <RichTextEditor.ControlsGroup>
// //                                                 <RichTextEditor.AlignLeft/>
// //                                                 <RichTextEditor.AlignCenter/>
// //                                                 <RichTextEditor.AlignJustify/>
// //                                                 <RichTextEditor.AlignRight/>
// //                                             </RichTextEditor.ControlsGroup>
// //                                         </RichTextEditor.Toolbar>

// //                                         <RichTextEditor.Content/>
// //                                     </RichTextEditor>
// //                                     <FileDropzone
// //                                         label="Upload fundraiser photos"
// //                                         description="You can select and upload several in one go"/>
// //                                     <TextInput
// //                                         label="Video URL"
// //                                         description="The inclusion of a personalized video can help your fundraiser raise more money. We support links from YouTube and Vimeo. Simply copy paste your video link into the field below."
// //                                         icon={<IconLink size={18}/>}
// //                                     />
// //                                 </Stack>
// //                             </Paper>
// //                         </Stepper.Step>
// //                         <Stepper.Step
// //                             label="Final details"
// //                             description="Add team members, customize visibility, and more"
// //                         >
// //                             <Title {...titleProps}>Final details</Title>
// //                             <Paper {...paperProps}>
// //                                 <Stack spacing="sm">
// //                                     <Title {...subTitleProps}>Manage Team</Title>
// //                                     <Text size="sm">If there&apos;s more than one person that's responsible for this
// //                                         fundraiser and you'd like them to get public credit and help manage this page,
// //                                         invite them via email.</Text>
// //                                     <Text size="sm">Team members will be shown on your page along with their role.
// //                                         Please remember, team members can change all elements of the page.</Text>
// //                                     <Alert color="orange" variant="light" icon={<IconInfoCircleFilled size={18}/>}>You
// //                                         haven't invited anyone to help manage this fundraiser yet.</Alert>
// //                                     <SimpleGrid cols={2} breakpoints={[{maxWidth: 'sm', cols: 1}]}>
// //                                         <TextInput label="First name"/>
// //                                         <TextInput label="Last name"/>
// //                                         <TextInput label="Email" mb="xs"/>
// //                                         <TextInput
// //                                             label="Role"
// //                                             placeholder="e.g. Social media manager, funds manager"
// //                                             mb="xs"
// //                                         />
// //                                     </SimpleGrid>
// //                                     <Button
// //                                         leftIcon={<IconMail size={18}/>}
// //                                         mx="auto"
// //                                         variant="light"
// //                                     >
// //                                         Send invite via email
// //                                     </Button>
// //                                 </Stack>
// //                             </Paper>
// //                             <Paper {...paperProps}>
// //                                 <Title {...subTitleProps}>Visibility</Title>
// //                                 <Stack spacing="sm">
// //                                     <Checkbox label="Allow your fundraiser to be shown under user created groups."/>
// //                                     <Checkbox
// //                                         label="Check this box if you would like to hide your campaign on our site. Only those that you send the URL to will be able to find it and donate."/>
// //                                     <Checkbox
// //                                         label="Check if you would like to stop search engines such as Google indexing this page."/>
// //                                     <Checkbox
// //                                         label="Check if you would like to add a password to your fundraising page. Only those with the password will be able to view and donate to the campaign."/>
// //                                 </Stack>
// //                             </Paper>
// //                             <Paper {...paperProps}>
// //                                 <Title {...subTitleProps}>Social media links</Title>
// //                                 <Text size="sm">Is this fundraiser shown in other places? If so, add links to those
// //                                     pages.</Text>
// //                                 <Box>
// //                                     {socialFields.length > 0 ? (
// //                                         <Flex mb="xs">
// //                                         </Flex>
// //                                     ) : (
// //                                         <Text color="dimmed" align="center" my="md">
// //                                             Add social media link
// //                                         </Text>
// //                                     )}

// //                                     {socialFields}

// //                                     <Group position="center" mt="md">
// //                                         <Button
// //                                             leftIcon={<IconPlus size={18}/>}
// //                                             onClick={() =>
// //                                                 socialForm.insertListItem('employees', {
// //                                                     name: '',
// //                                                     active: false,
// //                                                     key: randomId()
// //                                                 })
// //                                             }
// //                                             variant="light"
// //                                         >
// //                                             Add new social link
// //                                         </Button>
// //                                     </Group>
// //                                 </Box>
// //                             </Paper>
// //                             <Paper {...paperProps}>
// //                                 <Select
// //                                     label="How did you hear about us?"
// //                                     data={['Search engine', 'Friends & family', 'Social media', 'Other']}
// //                                 />
// //                             </Paper>
// //                         </Stepper.Step>
// //                         <Stepper.Step label="Payment methods" description="Get full access">
// //                             <Title {...titleProps}>Fundraiser Payment Methods</Title>
// //                             <Paper {...paperProps}>
// //                                 <Stack spacing="sm">
// //                                     <Title {...subTitleProps}>Enable payment processors for your fundraising
// //                                         page</Title>
// //                                     <Alert icon={<IconCurrency size={18}/>} color="blue">You can enable GGF Card
// //                                         Payments (powered by MangoPay) if you switch your currency from GBP to
// //                                         USD </Alert>
// //                                     <Text size="sm">Available payment methods</Text>
// //                                     <Group>
// //                                         <Button variant="light" leftIcon={<IconBrandPaypal size={18}/>}>Connect with
// //                                             Paypal</Button>
// //                                         <Button variant="light" leftIcon={<IconBrandGoogle size={18}/>}>Connect with
// //                                             Google Pay</Button>
// //                                         <Button variant="light" leftIcon={<IconBrandApple size={18}/>}>Connect with
// //                                             Apple Pay</Button>
// //                                     </Group>
// //                                 </Stack>
// //                             </Paper>
// //                         </Stepper.Step>
// //                         <Stepper.Completed>
// //                             <Title {...titleProps} align="center" my="xl">Completed, take a seat while we finish setting
// //                                 up things for you</Title>
// //                         </Stepper.Completed>
// //                     </Stepper>

// //                     <Group position="center" mt="xl">
// //                         <Button
// //                             variant="default"
// //                             onClick={prevStep}
// //                             leftIcon={<IconChevronLeft size={18}/>}
// //                         >
// //                             Back
// //                         </Button>
// //                         {active < 4 ?
// //                             <Button onClick={nextStep} leftIcon={<IconChevronRight size={18}/>}>Next step</Button> :
// //                             <Button component="a" href="/dashboard" leftIcon={<IconCheck size={18}/>}>Launch
// //                                 campaign</Button>
// //                         }
// //                     </Group>
// //                 </Container>
// //             </Box>
// //         </>
// //     );
// // };

// // export default CreateCampaignPage;


// import { Helmet } from "react-helmet";
// import {
//     ActionIcon, Alert, Anchor, Box, Button, Checkbox, Container, Flex,
//     Group, NumberInput, Paper, PaperProps, Radio, SegmentedControl, Select,
//     SimpleGrid, Stack, Stepper, Text, TextInput, Title, TitleProps, useMantineTheme
// } from "@mantine/core";
// import { Link, RichTextEditor } from '@mantine/tiptap';
// import { useEditor } from '@tiptap/react';
// import Highlight from '@tiptap/extension-highlight';
// import StarterKit from '@tiptap/starter-kit';
// import Underline from '@tiptap/extension-underline';
// import TextAlign from '@tiptap/extension-text-align';
// import Superscript from '@tiptap/extension-superscript';
// import SubScript from '@tiptap/extension-subscript';
// import React, { forwardRef, useState } from "react";
// import { DateInput } from "@mantine/dates";
// import {
//     IconBrandApple, IconBrandFacebook, IconBrandGoogle, IconBrandLinkedin,
//     IconBrandPaypal, IconBrandTwitter, IconBrandWhatsapp, IconBrandYoutube,
//     IconCalendar, IconCheck, IconChevronLeft, IconChevronRight, IconCurrency,
//     IconCurrencyDollar, IconInfoCircleFilled, IconLink, IconMail, IconPlus, IconTrash
// } from "@tabler/icons-react";
// import { CategorySelect, CountrySelect, CurrencySelect, FileDropzone } from "../components";
// import { randomId } from "@mantine/hooks";
// import { useForm } from "@mantine/form";
// // import { addCampaign } from "../link/Campaigns"; // Import corrigé
// import{addCampaign} from "../link/Campaigns"

// interface ISocialProps {
//     icon: React.FC<any>;
//     title: React.ReactNode;
// }

// const SocialSelectItem = forwardRef<HTMLDivElement, ISocialProps>(
//     ({ title, icon: Icon, ...others }: ISocialProps, ref) => (
//         <div ref={ref} {...others}>
//             <Group noWrap>
//                 <Icon size={18} stroke={1.5} />
//                 <Text size="sm" transform="capitalize">{title}</Text>
//             </Group>
//         </div>
//     )
// );

// const CreateCampaignPage = () => {
//     const theme = useMantineTheme();
//     const [active, setActive] = useState(0);
//     const [target, setTarget] = useState('deadline');
//     const [deadlineDate, setDeadlineDate] = useState<Date | null>(null);
//     const [donationType, setDonationType] = useState('any');
//     const [minimumCheck, setMinimumCheck] = useState(false);
//     const [mainImage, setMainImage] = useState<File | null>(null);

//     const [campaignDetails, setCampaignDetails] = useState({
//         title: '', category: '', country: '', city: '', currency: '',
//         targetAmount: '', allowOverFunding: false, ongoing: false, deadline: null,
//         minimumTarget: '', donationType: 'any', story: '',
//     });

//     const editor = useEditor({
//         extensions: [
//             StarterKit, Underline, Link, Superscript, SubScript, Highlight,
//             TextAlign.configure({ types: ['heading', 'paragraph'] }),
//         ],
//         content: '',
//         onUpdate: ({ editor }) => {
//             setCampaignDetails(prev => ({ ...prev, story: JSON.stringify(editor.getJSON()) }));
//         },
//     });

//     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//         const { name, value, type } = event.currentTarget;
//         setCampaignDetails(prev => ({
//             ...prev,
//             [name]: type === 'checkbox' ? event.currentTarget.checked : value,
//         }));
//     };

//     const handleSubmit = async () => {
//         try {
//             const campaignData = {
//                 title: campaignDetails.title,
//                 description: campaignDetails.story,
//                 createdAt: new Date().toISOString(),
//                 mainImage: mainImage?.name || '',
//                 createdBy: 'user-id-placeholder',
//                 createdByImage: 'user-image-placeholder',
//                 daysLeft: deadlineDate ? Math.ceil((deadlineDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)) : 0,
//                 amountRaised: '0',
//                 goal: campaignDetails.targetAmount,
//                 contributors: 0,
//                 category: campaignDetails.category,
//                 country: campaignDetails.country,
//                 type: target,
//             };

//             console.log("Envoi au backend:", campaignData);
//              await addCampaign(campaignData);
//             // if (response) {
//             //     alert("Campagne créée avec succès !");
//             // } else {
//             //     alert("Erreur lors de la création de la campagne");
//             // }
//         } catch (error) {
//             console.error("Erreur lors de l'envoi:", error);
//             alert("Erreur serveur !");
//         }
//     };

//     const nextStep = () => setActive((current) => (current < 4 ? current + 1 : current));
//     const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

//     const titleProps: TitleProps = { size: 24, mb: "md" };
//     const paperProps: PaperProps = { p: "md", withBorder: false, shadow: 'sm', mb: "md", sx: { backgroundColor: theme.white } };

//     return (
//         <>
//             <Helmet><title>Create campaign</title></Helmet>
//             <Box>
//                 <Container my={36}>
//                     <Title mb="xl" align="center">Create your campaign</Title>
//                     <Stepper active={active} onStepClick={setActive} breakpoint="sm">
//                         <Stepper.Step label="Get started" description="Set essential fundraiser details">
//                             <Title {...titleProps}>Campaign Information</Title>
//                             <Paper {...paperProps}>
//                                 <SimpleGrid cols={2}>
//                                     <TextInput label="Title" name="title" onChange={handleInputChange} />
//                                     <CategorySelect onChange={(val) => setCampaignDetails(prev => ({ ...prev, category: val || '' }))} />
//                                 </SimpleGrid>
//                             </Paper>
//                             <Paper {...paperProps}>
//                                 <SimpleGrid cols={2}>
//                                     <CountrySelect onChange={(val) => setCampaignDetails(prev => ({ ...prev, country: val || '' }))} />
//                                     <TextInput label="City" name="city" onChange={handleInputChange} />
//                                 </SimpleGrid>
//                             </Paper>
//                         </Stepper.Step>
//                         <Stepper.Step label="Campaign story" description="Tell your story">
//                             <Title {...titleProps}>Your Campaign Story</Title>
//                             <Paper {...paperProps}>
//                                 <RichTextEditor editor={editor}>
//                                     <RichTextEditor.Content />
//                                 </RichTextEditor>
//                                 <FileDropzone label="Upload main image" onDrop={(files) => setMainImage(files[0])} />
//                             </Paper>
//                         </Stepper.Step>
//                         <Stepper.Completed>
//                             <Title {...titleProps} align="center" my="xl">Completed, ready to launch!</Title>
//                         </Stepper.Completed>
//                     </Stepper>

//                     <Group position="center" mt="xl">
//                         <Button variant="default" onClick={prevStep} leftIcon={<IconChevronLeft size={18} />}>Back</Button>
//                         {active < 2 ? (
//                             <Button onClick={nextStep} leftIcon={<IconChevronRight size={18} />}>Next step</Button>
//                         ) : (
//                             <Button onClick={handleSubmit} leftIcon={<IconCheck size={18} />}>Launch Campaign</Button>
//                         )}
//                     </Group>
//                 </Container>
//             </Box>
//         </>
//     );
// };


// export default CreateCampaignPage;

// import { Helmet } from "react-helmet";
// import {
//     Box, Button, Checkbox, Container, Group, NumberInput, Paper, PaperProps,
//     Radio, SimpleGrid, Stack, Stepper, Text, TextInput, Title, TitleProps,
//     useMantineTheme
// } from "@mantine/core";
// import { Link, RichTextEditor } from '@mantine/tiptap';
// import { useEditor } from '@tiptap/react';
// import Highlight from '@tiptap/extension-highlight';
// import StarterKit from '@tiptap/starter-kit';
// import Underline from '@tiptap/extension-underline';
// import TextAlign from '@tiptap/extension-text-align';
// import Superscript from '@tiptap/extension-superscript';
// import SubScript from '@tiptap/extension-subscript';
// import React, { useState } from "react";
// // import { ObjectId } from 'mongodb';

// import { DateInput } from "@mantine/dates";
// import {
//     IconCalendar, IconCheck, IconChevronLeft, IconChevronRight, IconLink
// } from "@tabler/icons-react";
// import { CategorySelect, CountrySelect, CurrencySelect, FileDropzone } from "../components";
// // import { } from "../link/Campaigns"; // Ton appel API backend
// import CampaignsData from "../link/Campaigns";

// const CreateCampaignPage = () => {
//     const theme = useMantineTheme();
//     const [active, setActive] = useState(0);
//     const [target, setTarget] = useState('deadline');
//     const [deadlineDate, setDeadlineDate] = useState<Date | null>(null);
//     const [minimumCheck, setMinimumCheck] = useState(false);
//     interface StoryContentItem {
//         text?: string;
//         content?: StoryContentItem[];
//       }

//     const [uploadedImages, setUploadedImages] = useState<File[]>([]);
//     const [videoUrl, setVideoUrl] = useState('');

//     const [campaignDetails, setCampaignDetails] = useState({
//         title: '', category: '', country: '', city: '', currency: '',
//         targetAmount: '', allowOverFunding: false, donationType: 'any', story: ""
//     });

//     const editor = useEditor({
//         extensions: [
//             StarterKit, Underline, Link, Superscript, SubScript, Highlight,
//             TextAlign.configure({ types: ['heading', 'paragraph'] }),
//         ],
//         content: '',
//         onUpdate: ({ editor }) => {
//             setCampaignDetails(prev => ({ ...prev, story: JSON.stringify(editor.getJSON()) }));
//         },
//     });

//     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value, type } = event.currentTarget;
//         setCampaignDetails(prev => ({
//             ...prev,
//             [name]: type === 'checkbox' ? event.currentTarget.checked : value,
//         }));
//     };
//     // const extractText = (story: any): string => {
//     //     if (story && story.content && Array.isArray(story.content)) {
            
//     //         return story.content
//     //             .map((item: any) => item.content && item.content.map((subItem: any) => subItem.text).join(''))
//     //             .join('');  // Assure que tous les morceaux de texte sont bien joints
//     //     }
//     //     return '';
//     // };
//     const extractTextFromEditor = (story:any ): string => {
//         // Si 'story' n'est pas défini ou est vide, on retourne une chaîne vide
//         if (!story || !Array.isArray(story.content)) {
//             console.log("Structure inattendue pour campaignDetails.story:", story);
//             return '';  // Retourne une chaîne vide si structure non valide
//         }
    
//         // Sinon, on parcourt les éléments de 'content' pour extraire le texte
//         return story.content
//             .map((item: any) => {
//                 // Vérifie si cet élément a un sous-élément 'content', auquel cas on l'examine aussi
//                 if (item.content && Array.isArray(item.content)) {
//                     return extractTextFromEditor(item);  // Appel récursif
//                 }
//                 // Sinon, on récupère le texte directement
//                 return item.text || '';
//             })
//             .join(' ');  // On joint les morceaux de texte avec un espace
//     };
    
    

//     const handleSubmit = async () => {
//         console.log(campaignDetails.story)
//         console.log(typeof(campaignDetails.story))
//         const formData = new FormData();
//     uploadedImages.forEach((file) => {
//         formData.append("images", file);  // "images" doit correspondre à ce que le backend attend
//     });

//     await fetch("http://localhost:5000/api/campaigns/upload", {
//         method: "POST",
//         body: formData,
//     });


//         try {
//             const descriptionText = extractTextFromEditor(campaignDetails.story);  // Extrait le texte brut de campaignDetails.story

//             const campaignData = {
//                 // _id:"0",
//                 // _id: new ObjectId(),
//                 title: campaignDetails.title,
//                 description: campaignDetails.story,
//                 createdAt: new Date().toISOString(),
//                 mainImage: uploadedImages.length > 0 ? uploadedImages[0]?.name : '',
//                 additionalImages: uploadedImages.slice(1).map(file => file.name),
//                 videoUrl: videoUrl,
//                 createdBy: 'user-id-placeholder',
//                 createdByImage: 'user-image-placeholder',
//                 daysLeft: deadlineDate ? Math.ceil((deadlineDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)) : 0,
//                 amountRaised: '0',
//                 goal: campaignDetails.targetAmount,
//                 contributors: 0,
//                 category: campaignDetails.category,
//                 country: campaignDetails.country,
//                 city: campaignDetails.city,
//                 currency: campaignDetails.currency,
//                 allowOverFunding: campaignDetails.allowOverFunding,
//                 type: target,
//                 deadline: target === 'deadline' ? deadlineDate?.toISOString() : null,
//                 ongoing: target === 'no-deadline',
//                 donationType: campaignDetails.donationType,
//             };

//             console.log("Envoi au backend:", campaignData);
//             await CampaignsData.addCampaign(campaignData);
//             alert("Campagne créée avec succès !");
//         } catch (error) {
//             console.error("Erreur lors de l'envoi:", error);
//             alert("Erreur serveur !");
//         }
//     };

//     const nextStep = () => setActive((current) => (current < 2 ? current + 1 : current));
//     const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

//     const titleProps: TitleProps = { size: 24, mb: "md" };
//     const paperProps: PaperProps = { p: "md", withBorder: false, shadow: 'sm', mb: "md", sx: { backgroundColor: theme.white } };

//     return (
//         <>
//             <Helmet><title>Create campaign</title></Helmet>
//             <Box>
//                 <Container my={36}>
//                     <Title mb="xl" align="center">Create your campaign</Title>
//                     <Stepper active={active} onStepClick={setActive} breakpoint="sm">

//                         {/* Step 1 - Informations de base */}
//                         <Stepper.Step label="Get started" description="Set essential fundraiser details">
//                             <Title {...titleProps}>Campaign Information</Title>
//                             <Paper {...paperProps}>
//                                 <SimpleGrid cols={2}>
//                                     <TextInput label="Title" name="title" onChange={handleInputChange} />
//                                     <CategorySelect onChange={(val) => setCampaignDetails(prev => ({ ...prev, category: val || '' }))} />
//                                 </SimpleGrid>
//                             </Paper>
//                             <Paper {...paperProps}>
//                                 <SimpleGrid cols={2}>
//                                     <CountrySelect onChange={(val) => setCampaignDetails(prev => ({ ...prev, country: val || '' }))} />
//                                     <TextInput label="City" name="city" onChange={handleInputChange} />
//                                 </SimpleGrid>
//                             </Paper>
//                             <Paper {...paperProps}>
//                                 <CurrencySelect onChange={(val) => setCampaignDetails(prev => ({ ...prev, currency: val || '' }))} />
//                                 <NumberInput
//                                     label="Target amount"
//                                     name="targetAmount"
//                                     onChange={(val) => setCampaignDetails(prev => ({ ...prev, targetAmount: val?.toString() || '' }))}
//                                 />
//                                 <Radio.Group
//                                     label="Fundraiser type"
//                                     value={target}
//                                     onChange={setTarget}
//                                 >
//                                     <Group mt="xs">
//                                         <Radio value="deadline" label="With deadline" />
//                                         <Radio value="no-deadline" label="Ongoing" />
//                                     </Group>
//                                 </Radio.Group>

//                                 {target === 'deadline' && (
//                                     <DateInput
//                                         value={deadlineDate}
//                                         onChange={setDeadlineDate}
//                                         label="Deadline date"
//                                         placeholder="Pick a date"
//                                         icon={<IconCalendar size={18} />}
//                                     />
//                                 )}

//                                 <Checkbox
//                                     label="Allow funding over goal?"
//                                     checked={campaignDetails.allowOverFunding}
//                                     onChange={(e) => setCampaignDetails(prev => ({ ...prev, allowOverFunding: e.currentTarget.checked }))}
//                                 />
//                             </Paper>
//                         </Stepper.Step>

//                         {/* Step 2 - Story */}
//                         <Stepper.Step label="Campaign story" description="Tell your story">
//                             <Title {...titleProps}>Your Campaign Story</Title>
//                             <Paper {...paperProps}>
//                                 <Stack spacing="sm">
//                                     <Text size="sm">
//                                         Explain why you're raising money, what the funds will be used for, and how much you value the support.
//                                     </Text>

//                                     {/* Editeur */}
//                                     <RichTextEditor editor={editor}>
//                                         <RichTextEditor.Toolbar sticky stickyOffset={60}>
//                                             <RichTextEditor.ControlsGroup>
//                                                 <RichTextEditor.Bold />
//                                                 <RichTextEditor.Italic />
//                                                 <RichTextEditor.Underline />
//                                                 <RichTextEditor.Link />
//                                             </RichTextEditor.ControlsGroup>
//                                             <RichTextEditor.ControlsGroup>
//                                                 <RichTextEditor.H1 />
//                                                 <RichTextEditor.H2 />
//                                                 <RichTextEditor.H3 />
//                                                 <RichTextEditor.BulletList />
//                                                 <RichTextEditor.OrderedList />
//                                             </RichTextEditor.ControlsGroup>
//                                         </RichTextEditor.Toolbar>
//                                         <RichTextEditor.Content />
//                                     </RichTextEditor>

//                                     {/* Upload images */}
//                                     <FileDropzone
//                                         label="Upload fundraiser photos"
//                                         description="You can select and upload several images"
//                                         multiple
//                                         onDrop={(files) => setUploadedImages(files)}
//                                     />

//                                     {/* Lien vidéo */}
//                                     <TextInput
//                                         label="Video URL"
//                                         description="YouTube or Vimeo link (optional)"
//                                         placeholder="https://youtube.com/..."
//                                         icon={<IconLink size={18} />}
//                                         value={videoUrl}
//                                         onChange={(e) => setVideoUrl(e.currentTarget.value)}
//                                     />
//                                 </Stack>
//                             </Paper>
//                         </Stepper.Step>

//                         {/* Step 3 - Fin */}
//                         <Stepper.Completed>
//                             <Title {...titleProps} align="center" my="xl">Completed, ready to launch!</Title>
//                         </Stepper.Completed>

//                     </Stepper>

//                     {/* Boutons navigation */}
//                     <Group position="center" mt="xl">
//                         <Button variant="default" onClick={prevStep} leftIcon={<IconChevronLeft size={18} />}>Back</Button>
//                         {active < 2 ? (
//                             <Button onClick={nextStep} leftIcon={<IconChevronRight size={18} />}>Next step</Button>
//                         ) : (
//                             <Button onClick={handleSubmit} leftIcon={<IconCheck size={18} />}>Launch Campaign</Button>
//                         )}
//                     </Group>
//                 </Container>
//             </Box>
//         </>
//     );
// };

// export default CreateCampaignPage;
import { Helmet } from "react-helmet";
import {
    Box, Button, Checkbox, Container, Group, NumberInput, Paper, PaperProps,
    Radio, SimpleGrid, Stack, Stepper, Text, TextInput, Title, TitleProps,
    useMantineTheme
} from "@mantine/core";
import { DateInput } from "@mantine/dates";

import { useState } from "react";
import { IconCalendar, IconCheck, IconChevronLeft, IconChevronRight, IconLink } from "@tabler/icons-react";
import { CategorySelect, CountrySelect, CurrencySelect, FileDropzone } from "../components";
import CampaignsData from "../link/Campaigns";

const CreateCampaignPage = () => {
    const theme = useMantineTheme();
    const [active, setActive] = useState(0);
    const [target, setTarget] = useState('deadline');
    const [deadlineDate, setDeadlineDate] = useState<Date | null>(null);
    const [minimumCheck, setMinimumCheck] = useState(false);
    const [uploadedImages, setUploadedImages] = useState<File[]>([]);
    const [videoUrl, setVideoUrl] = useState('');

    const [campaignDetails, setCampaignDetails] = useState({
        title: '', category: '', country: '', city: '', currency: '',
        targetAmount: '', allowOverFunding: false, donationType: 'any', story: ''
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = event.currentTarget;
        setCampaignDetails(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? event.currentTarget.checked : value,
        }));
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        uploadedImages.forEach((file) => {
            formData.append("images", file);  // "images" doit correspondre à ce que le backend attend
        });

        await fetch("http://localhost:5000/api/campaigns/upload", {
            method: "POST",
            body: formData,
        });

        try {
            const campaignData = {
                title: campaignDetails.title,
                description: campaignDetails.story, // Maintenant c'est du texte brut
                createdAt: new Date().toISOString(),
                mainImage: uploadedImages.length > 0 ? uploadedImages[0]?.name : '',
                additionalImages: uploadedImages.slice(1).map(file => file.name),
                videoUrl: videoUrl,
                createdBy: 'user-id-placeholder',
                createdByImage: 'user-image-placeholder',
                daysLeft: deadlineDate ? Math.ceil((deadlineDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)) : 0,
                amountRaised: '0',
                goal: campaignDetails.targetAmount,
                contributors: 0,
                category: campaignDetails.category,
                country: campaignDetails.country,
                city: campaignDetails.city,
                currency: campaignDetails.currency,
                allowOverFunding: campaignDetails.allowOverFunding,
                type: target,
                deadline: target === 'deadline' ? deadlineDate?.toISOString() : null,
                ongoing: target === 'no-deadline',
                donationType: campaignDetails.donationType,
            };

            console.log("Envoi au backend:", campaignData);
            await CampaignsData.addCampaign(campaignData);
            alert("Campagne créée avec succès !");
        } catch (error) {
            console.error("Erreur lors de l'envoi:", error);
            alert("Erreur serveur !");
        }
    };

    const nextStep = () => setActive((current) => (current < 2 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    const titleProps: TitleProps = { size: 24, mb: "md" };
    const paperProps: PaperProps = { p: "md", withBorder: false, shadow: 'sm', mb: "md", sx: { backgroundColor: theme.white } };

    return (
        <>
            <Helmet><title>Create campaign</title></Helmet>
            <Box>
                <Container my={36}>
                    <Title mb="xl" align="center">Create your campaign</Title>
                    <Stepper active={active} onStepClick={setActive} breakpoint="sm">

                        {/* Step 1 - Informations de base */}
                        <Stepper.Step label="Get started" description="Set essential fundraiser details">
                            <Title {...titleProps}>Campaign Information</Title>
                            <Paper {...paperProps}>
                                <SimpleGrid cols={2}>
                                    <TextInput label="Title" name="title" onChange={handleInputChange} />
                                    <CategorySelect onChange={(val) => setCampaignDetails(prev => ({ ...prev, category: val || '' }))} />
                                </SimpleGrid>
                            </Paper>
                            <Paper {...paperProps}>
                                <SimpleGrid cols={2}>
                                    <CountrySelect onChange={(val) => setCampaignDetails(prev => ({ ...prev, country: val || '' }))} />
                                    <TextInput label="City" name="city" onChange={handleInputChange} />
                                </SimpleGrid>
                            </Paper>
                            <Paper {...paperProps}>
                                <CurrencySelect onChange={(val) => setCampaignDetails(prev => ({ ...prev, currency: val || '' }))} />
                                <NumberInput
                                    label="Target amount"
                                    name="targetAmount"
                                    onChange={(val) => setCampaignDetails(prev => ({ ...prev, targetAmount: val?.toString() || '' }))} />
                                <Radio.Group
                                    label="Fundraiser type"
                                    value={target}
                                    onChange={setTarget}
                                >
                                    <Group mt="xs">
                                        <Radio value="deadline" label="With deadline" />
                                        <Radio value="no-deadline" label="Ongoing" />
                                    </Group>
                                </Radio.Group>

                                {target === 'deadline' && (
                                    <DateInput
                                        value={deadlineDate}
                                        onChange={setDeadlineDate}
                                        label="Deadline date"
                                        placeholder="Pick a date"
                                        icon={<IconCalendar size={18} />}
                                    />
                                )}

                                <Checkbox
                                    label="Allow funding over goal?"
                                    checked={campaignDetails.allowOverFunding}
                                    onChange={(e) => setCampaignDetails(prev => ({ ...prev, allowOverFunding: e.currentTarget.checked }))} />
                            </Paper>
                        </Stepper.Step>

                        {/* Step 2 - Story */}
                        <Stepper.Step label="Campaign story" description="Tell your story">
                            <Title {...titleProps}>Your Campaign Story</Title>
                            <Paper {...paperProps}>
                                <Stack spacing="sm">
                                    <Text size="sm">
                                        Explain why you're raising money, what the funds will be used for, and how much you value the support.
                                    </Text>

                                    {/* Nouveau champ texte pour la description */}
                                    <TextInput
                                        label="Campaign Story"
                                        placeholder="Tell your story here"
                                        value={campaignDetails.story|| ''}
                                        onChange={(e) => setCampaignDetails(prev => ({ ...prev, story: e.target.value }))}
                                        // multiline
                                        // minRows={4}
                                    />

                                    {/* Upload images */}
                                    <FileDropzone
                                        label="Upload fundraiser photos"
                                        description="You can select and upload several images"
                                        multiple
                                        onDrop={(files) => setUploadedImages(files)}
                                    />

                                    {/* Lien vidéo */}
                                    <TextInput
                                        label="Video URL"
                                        description="YouTube or Vimeo link (optional)"
                                        placeholder="https://youtube.com/..."
                                        icon={<IconLink size={18} />}
                                        value={videoUrl}
                                        onChange={(e) => setVideoUrl(e.currentTarget.value)} />
                                </Stack>
                            </Paper>
                        </Stepper.Step>

                        {/* Step 3 - Fin */}
                        <Stepper.Completed>
                            <Title {...titleProps} align="center" my="xl">Completed, ready to launch!</Title>
                        </Stepper.Completed>

                    </Stepper>

                    {/* Boutons navigation */}
                    <Group position="center" mt="xl">
                        <Button variant="default" onClick={prevStep} leftIcon={<IconChevronLeft size={18} />}>Back</Button>
                        {active < 2 ? (
                            <Button onClick={nextStep} leftIcon={<IconChevronRight size={18} />}>Next step</Button>
                        ) : (
                            <Button onClick={handleSubmit} leftIcon={<IconCheck size={18} />}>Launch Campaign</Button>
                        )}
                    </Group>
                </Container>
            </Box>
        </>
    );
};

export default CreateCampaignPage;
