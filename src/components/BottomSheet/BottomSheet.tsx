import React from 'react';
import { Dimensions, Modal } from 'react-native';

import { Box } from '../Box/Box';
import { BoxInput } from '../BoxInput/BoxInput';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { TransactionButton } from '../TransactionButton/TransactionButton';

const DIMENSIONS = Dimensions.get('window');
const SHEET_HEIGHT = DIMENSIONS.height * 0.55;

type BottomSheetProps = {
  visible?: boolean;
  onPress?: () => void;
};

export function BottomSheet({ visible, onPress }: BottomSheetProps) {
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <Box flex={1} style={{ backgroundColor: 'rgba(0,0,0,0.70)' }}>
        <Box
          position="absolute"
          bottom={0}
          width={DIMENSIONS.width}
          height={SHEET_HEIGHT}
          bg="backgroundSecondary"
          padding="s24"
          borderTopLeftRadius="s32"
          borderTopRightRadius="s32"
        >
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            mb="s24"
          >
            <Text preset="textXl" color="textLabel" semiBold>
              Nova transação
            </Text>
            <Icon name="x" size={24} color="textSpan" onPress={onPress} />
          </Box>

          <BoxInput
            placeholder="Descrição"
            boxProps={{ mb: 's12', borderBottomWidth: 0 }}
          />
          <BoxInput placeholder="Preço" boxProps={{ mb: 's12' }} />
          <BoxInput placeholder="Categoria" boxProps={{ mb: 's12' }} />

          <Box
            flexDirection="row"
            alignItems="center"
            gap="s8"
            alignSelf="center"
            mb="s40"
          >
            <TransactionButton type="income" />
            <TransactionButton type="expense" />
          </Box>

          <Button title="Cadastrar" />
        </Box>
      </Box>
    </Modal>
  );
}
