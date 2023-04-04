import { Card, Col, Container, Grid, Row, Image, Text } from "@nextui-org/react";
import { Graduate } from "next/font/google";
import Marquee from "react-fast-marquee";
export default function UserReviews() {
    const reviews = [
        {
            name: "CelestialExplorer",
            content:
                "the experience has been life-changing",
        },
        {
            name: "QuantumHopper",
            content:
                "Honestly, the experience has been life-changing. Never knew ",
        },
        {
            name: "PixelPioneer",
            content:
                "I've never been more proud to be part of a ",
        },
        {
            name: "WanderlustWhiz",
            content:
                "I thought I knew what it meant to wait... until I ",
        },
        {
            name: "CosmicCrafter",
            content:
                "Just when I thought I'd seen it all, ",
        },
        {
            name: "DigitalDaydreamer",
            content:
                "I'm telling all my friends about the",
        },
        {
            name: "WhimsicalWordsmith",
            content:
                "Finally, an app that embraces the beauty of ",
        },
        {
            name: "StarryScribe",
            content:
                "Who knew that the simple act of joining a ",
        },
        {
            name: "EnigmaticEngineer",
            content:
                "I've never been happier to wait in line for something.",
        },
        {
            name: "TimelessTraveler",
            content:
                "The anticipation is real with ",
        },
        {
            name: "DragonflyFighter",
            content:
                "I really can't wait to enter ",
        },
        {
            name: "MysticalMaverick",
            content:
                "I want to wait in line for the",
        },
    ];
    const ReviewItem = ({props}:{props: any}) => {
        return (
            <Card css={{ h: "$40", w: "$60", bg: "#06204d"}} isPressable>
                <Card.Body
                    className="flex items-center mb-2"
                >
                    <Image 
                        className="h-12 w-12 rounded-full object-cover"
                        src={`https://i.pravatar.cc/150?u=${props.name}`}
                        alt={props.name}
                    />
                    <div className="ml-4">
                        <h3 className="font-semibold text-lg">{props.name}</h3>
                        <p className="text-white-500">@{props.name}</p>
				    </div>
                    <Text className="text-white-500">
                        {props.content}
                    </Text>
                </Card.Body>
            </Card>
        )
    }
    return (
        <>
            <div className="my-[5rem]">
                <div>
                    <h2 className="text-4xl font-bold text-center mb-10">
                        What people are saying about{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
                            #SignaturesbyDoyen
                        </span>
                    </h2>
                </div>
                <Container gap={2} justify="center">
                    <Marquee
                        pauseOnClick={true}
                        pauseOnHover={false}
                        gradient={false}
                        speed={15}
                    >
                        <Row gap={1}>
                            {reviews.map((item, index) => (
                                <div key={index}
                                className="rounded-lg p-2 hover:scale-[1.02] transition duration-300"
                                >
                                    <ReviewItem props={item} />
                                </div>
                            ))}
                        </Row>
                    </Marquee>
                </Container>
                
            </div>
        </>
    )
}