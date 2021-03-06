import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './containers/Home';
import { Login } from './containers/Login';
import theme from './theme';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        {/* <Grid minH="100vh" p={3}> */}
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        <BrowserRouter>
          <Switch>
            <Route exact path="/dashboard" component={Home} />
            <Route exact path="/login" component={Login} />
            <Redirect path="/" to="/login" />
          </Switch>
        </BrowserRouter>
        {/* <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack> */}
        {/* </Grid> */}
      </Box>
    </ChakraProvider>
  );
}

export default App;
