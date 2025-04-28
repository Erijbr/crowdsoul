import React, { useState } from 'react';
import {
    Badge,
    Card,
    createStyles,
    Flex,
    getStylesRef,
    Group,
    Image,
    PaperProps,
    Progress,
    Stack,
    Text,
    Button
} from '@mantine/core';
import { ICampaign } from "../types";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
    card: {
        position: 'relative',
        padding: theme.spacing.lg,
        backdropFilter: `blur(16px) saturate(180%)`,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : `rgba(255, 255, 255, 0.75)`,
        border: `2px solid rgba(209, 213, 219, 0.3)`,

        [`&:hover .${getStylesRef('image')}`]: {
            transform: 'scale(1.03)',
        },

        '&:hover': {
            boxShadow: theme.shadows.xl,
            border: `2px solid ${theme.colors.primary[7]}`,
            backgroundColor: theme.colors.primary[0],
            transition: 'all 150ms ease',
        }
    },

    title: {
        marginTop: theme.spacing.md,
    },

    image: {
        ref: getStylesRef('image'),
        transition: 'transform 150ms ease',
    }
}));

interface IProps extends PaperProps {
    data: ICampaign;
    showActions?: boolean;
}

// Fonction pour extraire le texte de la structure JSON
const extractTextFromDoc = (doc: any) => {
    if (doc && doc.content) {
        // Parcourt chaque élément de la structure et extrait le texte
        return doc.content
            .map((item: any) => item.content?.map((textItem: any) => textItem.text).join(''))
            .join('');
    }
    return '';
};

const CampaignCard = ({ data, showActions }: IProps) => {
    const { classes } = useStyles();
    const {
        mainImage,
        _id,
        title,
        amountRaised,
        daysLeft,
        contributors,
        description,
        category,
        country
    } = data;

    // Extraire le texte de la description (qui est un objet JSON)
    const extractedDescription = extractTextFromDoc(description);
    console.log("hi",extractedDescription);

    const linkProps = { to: `/campaigns/${_id}`, rel: 'noopener noreferrer' };

    return (
        <Card radius="sm" shadow="md" ml="xs" component={Link} {...linkProps} className={classes.card}>
            <Card.Section>
                <Image src={mainImage} height={280} className={classes.image} />
            </Card.Section>

            <Card.Section pt={0} px="md" pb="md">
                <Stack>
                    <Text className={classes.title} lineClamp={1} fw={500} size="lg">
                        {title}
                    </Text>

                    <Group position="apart">
                        <Text size="xs" transform="uppercase" color="dimmed" fw={700}>{country}</Text>
                        <Badge variant="dot" color="secondary">{category}</Badge>
                    </Group>

                    {showActions && <Text size="sm">{extractedDescription}</Text>}

                    <Progress value={daysLeft} />

                    <Flex justify="space-between">
                        <Text><b>{amountRaised}</b> raised</Text>
                        <Text><b>{contributors}</b> donations</Text>
                    </Flex>

                    {/* {showActions && <Button>Donate Now</Button>} */}
                </Stack>
            </Card.Section>
        </Card>
    );
};

export default CampaignCard;
