'use-client';

import { Card, Container, Grid, Link, Modal, Text, Image } from "@nextui-org/react";
import { it } from "node:test";
import { useState } from "react";
import Marquee from "react-fast-marquee";
export default function Gallery() {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
    const list = [
      {
        title: "Orange",
        img: "https://signaturesbydoyen.org/doyen-signature.jpg",
        price: "$5.50",
      },
      {
        title: "Tangerine",
        img: "https://signaturesbydoyen.org/doyen-signature.jpg",
        price: "$3.00",
      },
      {
        title: "Cherry",
        img: "https://signaturesbydoyen.org/doyen-signature.jpg",
        price: "$10.00",
      },
      {
        title: "Lemon",
        img: "https://signaturesbydoyen.org/doyen-signature.jpg",
        price: "$5.30",
      },
      {
        title: "Avocado",
        img: "https://signaturesbydoyen.org/doyen-signature.jpg",
        price: "$15.70",
      },
      {
        title: "Lemon 2",
        img: "https://signaturesbydoyen.org/doyen-signature.jpg",
        price: "$8.00",
      },
      {
        title: "Banana",
        img: "https://signaturesbydoyen.org/doyen-signature.jpg",
        price: "$7.50",
      },
      {
        title: "Watermelon",
        img: "https://signaturesbydoyen.org/doyen-signature.jpg",
        price: "$12.20",
      },
      {
          title: "Watermelon",
          img: "https://signaturesbydoyen.org/doyen-signature.jpg",
          price: "$12.20",
      },
    ];

    const GalleryItem = ({props}:{props: any})=>{
        return (
          <>
            <Card css={{ h: "$40", w: "$40"}} isPressable onPress={handler}>
              <Card.Body css={{ p: 0 }}>
              <Card.Image
                  src={props.img}
                  objectFit="cover"
                  width='100%'
                  height='100%'
                  alt={props.title}
              />
              </Card.Body>
            </Card>
            <Modal noPadding open={visible} onClose={closeHandler}>
              <Modal.Header
                css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
              >
                <Text>
                  {props.title}
                </Text>
              </Modal.Header>
              <Modal.Body>
                <Image
                  showSkeleton
                  src={props.img}
                  width={400}
                  height={490}
                />
              </Modal.Body>
            </Modal>
          </>
        )
    }
    return(
        <>
            <div className="my-[5rem]">
              <div>
                  <h2 className="text-4xl font-bold text-center mb-10">
                      A Fashion Gallery of Signatures by Doyen{" "}
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
                          #UnveilingtheChic
                      </span>
                  </h2>
              </div>
              <Container gap={2} justify="center">
                <Marquee
                    pauseOnClick={true}
                    play={true ? visible : true}
                    pauseOnHover={false}
                    gradient={false}
                    speed={10}
                >
                  {list.map((item, index) => (
                    <div key={index}>
                      <GalleryItem props={item} />
                    </div>
                  ))}
                </Marquee>
              </Container>
            </div>
        </>
    );
}