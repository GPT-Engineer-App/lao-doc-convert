import React, { useState } from "react";
import { Container, VStack, Heading, Text, Button, Input, useToast, Progress, Link, Icon } from "@chakra-ui/react";
import { FaFileUpload, FaFileDownload } from "react-icons/fa";

const Index = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");
  const toast = useToast();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a PDF file to convert.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    // Simulate a file conversion process
    setTimeout(() => {
      setLoading(false);
      setDownloadUrl('https://images.unsplash.com/photo-1521791055366-0d553872125f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb252ZXJ0ZWQlMjBXb3JkJTIwZG9jdW1lbnR8ZW58MHx8fHwxNzE0ODEwNDY2fDA&ixlib=rb-4.0.3&q=80&w=1080'); // This would be the link to the converted file
      toast({
        title: "Conversion Successful",
        description: "Your file has been converted.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }, 3000);
  };

  return (
    <Container centerContent maxW="container.md" padding={4}>
      <VStack spacing={4} width="100%">
        <Heading>PDF to Word Converter</Heading>
        <Text>Convert your PDF documents to editable Word format with support for Lao language.</Text>
        <Input type="file" accept=".pdf" onChange={handleFileChange} placeholder="Upload PDF file" size="lg" />
        <Button leftIcon={<Icon as={FaFileUpload} />} colorScheme="blue" onClick={handleUpload} isLoading={loading}>
          Convert to Word
        </Button>
        {loading && <Progress size="xs" isIndeterminate />}
        {downloadUrl && (
          <Link href={downloadUrl} isExternal>
            <Button leftIcon={<Icon as={FaFileDownload} />} colorScheme="green">
              Download Word File
            </Button>
          </Link>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
