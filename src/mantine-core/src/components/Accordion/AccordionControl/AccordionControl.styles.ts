import { createStyles, MantineTheme, CSSObject } from '@mantine/styles';
import { AccordionStylesParams } from '../Accordion.types';

export type AccordionChevronPosition = 'right' | 'left';

export interface AccordionControlStylesParams extends AccordionStylesParams {
  transitionDuration: number;
  chevronPosition: AccordionChevronPosition;
  chevronSize: number;
}

function getVariantStyles(theme: MantineTheme, { variant }: AccordionStylesParams): CSSObject {
  if (variant === 'default' || variant === 'contained') {
    return {
      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
      },
    };
  }

  return {};
}

export default createStyles(
  (
    theme,
    { transitionDuration, chevronPosition, chevronSize, ...params }: AccordionControlStylesParams
  ) => ({
    chevron: {
      transition: `transform ${transitionDuration}ms ease`,
      marginRight: chevronPosition === 'right' ? 0 : theme.spacing.sm,
      marginLeft: chevronPosition === 'right' ? theme.spacing.lg : 0,
      width: chevronSize,
      minWidth: chevronSize,

      '&[data-rotate="true"]': {
        transform: 'rotate(180deg)',
      },
    },

    label: {
      color: 'inherit',
      fontWeight: 400,
      flex: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },

    itemTitle: {
      margin: 0,
      padding: 0,
    },

    control: {
      ...theme.fn.focusStyles(),
      ...theme.fn.fontStyles(),
      ...getVariantStyles(theme, params),
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: chevronPosition === 'right' ? 'row-reverse' : 'row',
      padding: `${theme.spacing.md}px ${theme.spacing.md / 2}px`,
      paddingLeft: chevronPosition === 'right' ? theme.spacing.sm + 4 : null,
      textAlign: 'left',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

      '&:disabled': {
        opacity: 0.4,
        cursor: 'not-allowed',

        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  })
);
