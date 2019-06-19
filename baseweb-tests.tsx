import * as React from "react";
import {
  BaseProvider,
  DarkTheme,
  LightTheme,
  createTheme,
  styled
} from "baseui";
import { Block, BlockPropsT, StyledBlockPropsT } from "baseui/block";
import {
  Breadcrumbs,
  BreadcrumbsPropsT,
  StyledRoot as BreadCrumbsStyledRoot,
  StyledSeperator
} from "baseui/breadcrumbs";
import {
  Button,
  StyledBaseButton,
  StyledEndEnhancer,
  StyledLoadingSpinner,
  StyledLoadingSpinnerContainer,
  StyledStartEnhancer,
  KIND,
  SHAPE,
  SIZE
} from "baseui/button";
import {
  FlexGrid,
  FlexGridItem,
  FlexGridPropsT,
  FlexGridItemPropsT
} from "baseui/flex-grid";
import {
  ALIGN,
  HeaderNavigation,
  StyledRoot as HeaderNavigationStyledRoot,
  StyledNavigationItem,
  StyledNavigationList
} from "baseui/header-navigation";
import { Icon, StyledSvg, StyledComponentArgsT } from "baseui/icon";
import ChevronLeft from "baseui/icon/chevron-left";
import { ADJOINED, Input, StatefulInput, StyledInput } from "baseui/input";
import { Layer, LayersManager, Tether, TETHER_PLACEMENT } from "baseui/layer";

class StyledBlock extends React.Component<StyledBlockPropsT> {}

class TestComponent extends React.Component {
  render() {
    const theme = createTheme(
      {
        primary50: "#EDF3FE",
        primary100: "#D2E0FC",
        primary200: "#9CBCF8",
        primary300: "#548BF4",
        primary400: "#276EF1",
        primary500: "#174EB6",
        primary600: "#123D90",
        primary700: "#0C2960",

        negative50: "#FDF0EF",
        negative100: "#FADBD7",
        negative200: "#F4AFA7",
        negative300: "#EB7567",
        negative400: "#E54937",
        negative500: "#AE372A",
        negative600: "#892C21",
        negative700: "#5C1D16",

        warning50: "#FEF3EC",
        warning100: "#FBE2CF",
        warning200: "#F6BA8B",
        warning300: "#F19248",
        warning400: "#ED6F0E",
        warning500: "#B4540B",
        warning600: "#8E4308",
        warning700: "#5F2C06",

        positive50: "#EBF8F2",
        positive100: "#CDEDDE",
        positive200: "#88D3B0",
        positive300: "#43B982",
        positive400: "#07A35A",
        positive500: "#057C44",
        positive600: "#046236",
        positive700: "#034124",

        mono100: "#FFFFFF",
        mono200: "#F7F7F7",
        mono300: "#F0F0F0",
        mono400: "#E5E5E5",
        mono500: "#CCCCCC",
        mono600: "#B3B3B3",
        mono700: "#999999",
        mono800: "#666666",
        mono900: "#333333",
        mono1000: "#000000",

        rating200: "#FFE1A5",
        rating400: "#FFC043",

        primaryFontFamily:
          'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif'
      },
      { extraValue: "stoof" }
    );
    const StyledComponent = styled(Block, { margin: "10px" });
    const StyledComponentTheme = styled<StyledBlockPropsT>(
      StyledBlock,
      ({ $theme, $as }) => ({
        margin: $theme.sizing.scale100
      })
    );
    const StyledTag = styled("div", { margin: "10px" });
    const StyledTagTheme = styled<{ $extra: string }>("div", ({ $theme }) => ({
      margin: $theme.sizing.scale100
    }));

    return (
      <>
        {/* Styled */}
        <StyledComponent as="div" />
        <StyledTag text-align="center" />

        {/* BaseProvider */}
        <BaseProvider theme={theme} />

        {/* Block */}
        <Block as="div" color="primary200" />
        <Block as="div" color={["primary200", "blue"]} />
        <Block
          overrides={{
            Block: {
              style: ({ $theme, $as }) => ({
                margin: $theme.sizing.scale100
              }),
              props: {},
              component: ({ $as, children }) => <div />
            }
          }}
        />
        <Block
          overrides={{
            Block: {
              style: {
                margin: "10px"
              },
              component: StyledBlock
            }
          }}
        />
        <Block
          overrides={{
            Block: StyledBlock
          }}
        />

        {/* Breadcrumbs */}
        <Breadcrumbs
          ariaLabel="label"
          overrides={{
            Root: {
              style: ({ $theme }) => ({
                margin: $theme.sizing.scale100
              }),
              props: {},
              component: ({ children }) => <div />
            },
            Separator: {
              style: ({ $theme }) => ({
                margin: $theme.sizing.scale100
              }),
              props: {},
              component: ({ children }) => <div />
            }
          }}
        />
        <Breadcrumbs
          ariaLabel="label"
          overrides={{
            Root: {
              style: {
                margin: "10px"
              },
              component: Block
            },
            Separator: {
              style: {
                margin: "10px"
              },
              component: Block
            }
          }}
        />
        <Breadcrumbs
          ariaLabel="label"
          overrides={{
            Root: BreadCrumbsStyledRoot,
            Separator: StyledSeperator
          }}
        />

        {/* Button */}
        <Button size={SIZE.compact} kind={KIND.minimal} shape={SHAPE.default} />
        <Button
          overrides={{
            BaseButton: {
              style: ({ $theme }) => ({
                margin: $theme.sizing.scale100
              }),
              props: {},
              component: ({ children, $disabled }) => <div />
            },
            EndEnhancer: {
              style: ({ $theme }) => ({
                margin: $theme.sizing.scale100
              }),
              props: {},
              component: ({ children, $disabled }) => <div />
            },
            LoadingSpinner: {
              style: ({ $theme }) => ({
                margin: $theme.sizing.scale100
              }),
              props: {},
              component: ({ children, $disabled }) => <div />
            },
            LoadingSpinnerContainer: {
              style: ({ $theme }) => ({
                margin: $theme.sizing.scale100
              }),
              props: {},
              component: ({ children, $disabled }) => <div />
            },
            StartEnhancer: {
              style: ({ $theme }) => ({
                margin: $theme.sizing.scale100
              }),
              props: {},
              component: ({ children, $disabled }) => <div />
            }
          }}
        />
        <Button
          overrides={{
            BaseButton: {
              component: StyledBaseButton
            },
            EndEnhancer: {
              component: StyledBaseButton
            },
            LoadingSpinner: {
              component: StyledBaseButton
            },
            LoadingSpinnerContainer: {
              component: StyledBaseButton
            },
            StartEnhancer: {
              component: StyledBaseButton
            }
          }}
        />

        {/* Flex Grid */}
        <FlexGrid
          as="div"
          flexGridColumnCount={2}
          flexGridColumnGap={["scale100", "scale200"]}
        />
        <FlexGridItem
          as="div"
          flexGridColumnCount={2}
          flexGridColumnGap={["scale100", "scale200"]}
        />

        {/* Header Navigation */}
        <HeaderNavigation
          overrides={{
            Root: {
              style: ({ $theme }) => ({
                margin: $theme.sizing.scale100
              }),
              component: () => <div />
            }
          }}
        />
        <HeaderNavigation
          overrides={{
            Root: {
              style: ({ $theme }) => ({
                margin: $theme.sizing.scale100
              }),
              component: Block
            }
          }}
        />
        <HeaderNavigation
          overrides={{
            Root: Block
          }}
        />
        <StyledNavigationItem />
        <StyledNavigationList $align={ALIGN.right} />

        {/* Icon */}
        <ChevronLeft size="wickedhuge" />
        <ChevronLeft
          overrides={{
            Svg: { style: ({ $theme, $size }) => ({}), component: StyledSvg }
          }}
        />

        {/* Input */}
        <Input
          onChange={e => e.target.value}
          value={"byfiat"}
          error
          startEnhancer={({ $positive }) => <div />}
        />
        <StatefulInput
          positive
          placeholder="some text"
          size={SIZE.default}
          initialState={{ value: "default" }}
        />

        <Input
          overrides={{
            After: {
              style: ({ $theme, $disabled }) => ({
                margin: $theme.sizing.scale100
              }),
              props: {},
              component: ({ children, $disabled }) => <div />
            },
            Before: {
              style: ({ $theme, $disabled }) => ({
                margin: $theme.sizing.scale100
              }),
              props: {},
              component: ({ children, $disabled }) => <div />
            },
            EndEnhancer: {
              style: ({ $theme, $disabled }) => ({
                margin: $theme.sizing.scale100
              }),
              props: {},
              component: ({ children, $disabled }) => <div />
            },
            Input: {
              style: ({ $theme, $disabled }) => ({
                margin: $theme.sizing.scale100
              }),
              props: {},
              component: ({ children, $disabled }) => <div />
            },
            InputContainer: {
              style: ({ $theme, $disabled }) => ({
                margin: $theme.sizing.scale100
              }),
              props: {},
              component: ({ children, $disabled }) => <div />
            },
            Root: {
              style: ({ $theme, $disabled }) => ({
                margin: $theme.sizing.scale100
              }),
              props: {},
              component: ({ children, $disabled }) => <div />
            },
            StartEnhancer: {
              style: ({ $theme, $disabled }) => ({
                margin: $theme.sizing.scale100
              }),
              props: {},
              component: ({ children, $disabled }) => <div />
            }
          }}
        />

        {/* Layer */}
        <Layer onMount={() => {}} onUnmount={() => {}} />
        <LayersManager />
        <Tether
          onPopperUpdate={({ arrow, popper }, { offsets, placement }) => {}}
          placement={TETHER_PLACEMENT.right}
        />
      </>
    );
  }
}
