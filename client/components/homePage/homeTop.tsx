import * as React from 'react';

//* Style import
import {
        HomeBannerBtn,
        HomeBannerContainer,
        HomeBannerContent,
        HomeBannerImage,
        HomeBannerSide,
        HomeContainerTop,
        HomeFeatureContainer,
} from './style';
import { Text } from '../../style/typography';
import { Layout } from '../../style/grid';
import { ImageFull, Box } from '../../style/common';
import { Pagination } from '../pagination';

export interface HomeTopProps {}

const HomeTop: React.FunctionComponent<HomeTopProps> = () => {
        return (
                <HomeContainerTop>
                        <Text $textAlign="center" $color="white" $type="h1">
                                Make Your Awesome Quiz And Become
                                <br />
                                Your Most Unstoppable Self
                        </Text>

                        <HomeBannerContainer>
                                <Layout $justifyContent="space-around" $alignItems="stretch">
                                        <HomeBannerImage>
                                                <ImageFull src="/page/home/image/banner-top.png" alt="" />
                                        </HomeBannerImage>
                                        <HomeBannerSide>
                                                <Pagination />
                                                <HomeBannerContent>
                                                        <Text as="h3" $type="h3" $color="white">
                                                                Organize your study
                                                        </Text>
                                                        <Text as="p" $type="p1" $color="white">
                                                                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur
                                                                duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat
                                                                incididunt sint deserunt ut voluptate aute id deserunt nisi.
                                                        </Text>
                                                        <HomeBannerBtn>
                                                                <Text as="p" $type="p1" $color="white">
                                                                        Learn more
                                                                </Text>
                                                                <Box $width="12px">
                                                                        <ImageFull src="/asset/icon/arrow-right.svg" alt="" />
                                                                </Box>
                                                        </HomeBannerBtn>
                                                </HomeBannerContent>
                                        </HomeBannerSide>
                                </Layout>
                        </HomeBannerContainer>

                        <HomeFeatureContainer>
                                <Text as="h3" $type="h3" $textAlign="center">
                                        MyQuiz Is A Great Platform To Build Your Awesome Quizzes
                                        <br />
                                        Explore Your Knowledge With Our Quizzes
                                </Text>

                                <Layout $alignItems="center" $justifyContent="space-between">
                                        <Text as="h4" $type="h4" $textAlign="center">
                                                1K
                                                <br />
                                                <span>{`> `}</span>
                                                STUDENTS
                                        </Text>
                                        <Text as="h4" $type="h4" $textAlign="center">
                                                3K
                                                <br />
                                                <span>{`> `}</span>
                                                QUIZZES
                                        </Text>
                                        <Text as="h4" $type="h4" $textAlign="center">
                                                8K
                                                <br />
                                                <span>{`> `}</span>
                                                HOURS EXAM
                                        </Text>
                                        <Text as="h4" $type="h4" $textAlign="center">
                                                500
                                                <br />
                                                <span>{`> `}</span>
                                                TEACHERS
                                        </Text>
                                </Layout>
                        </HomeFeatureContainer>
                </HomeContainerTop>
        );
};

export default HomeTop;