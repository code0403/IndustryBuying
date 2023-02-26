import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";

export const AdminProductData = ({ el, handleDelete }) => {
  return (
    <Card>
      <CardBody>
        <Image
          src={el.image}
          alt="product"
          borderRadius="md"
          boxSize="150px"
          alignItems="center"
        />
        <Stack mt="6" spacing="3">
          <Heading size="sm" noOfLines={1}>
            {el.name}
          </Heading>
          <Text fontSize="sm" as="b">
            Category: <span>{el.category}</span>{" "}
          </Text>
          <Text fontSize="sm">Offered By:{el.by}</Text>
          <Text fontSize="sm">Price: ₹{el.price}</Text>
          <Text fontSize="sm">Discount: {el.discount}%</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="20">
          <Link to={`/edit/${el.id}`}>
            {" "}
            <Button colorScheme="teal" size="sm">
              Edit
            </Button>
          </Link>
          <Button
            colorScheme="red"
            size="sm"
            onClick={() => handleDelete(el.id)}
          >
            Delete
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
