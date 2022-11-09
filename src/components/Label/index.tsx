import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

import colors from '~/styles/colors';

// [Delivery status]
// 배송중 deliveryA
// 발송준비 deliveryB
// 발송완료 deliveryC

// [Repair status]
// 무상수리 repairA
// 교환처리 repairB

// [Deposit status]
// 입금대기 depositA
// 후 정산 depositB
// 입급완료 depositC

// [Release status]
// 출고요청 releaseA
// 출고완료 releaseB
// 출고취소 releaseC

export type DeliveryType = 'deliveryA' | 'deliveryB' | 'deliveryC';
export type RepairType = 'repairA' | 'repairB';
export type DepositType = 'depositA' | 'depositB' | 'depositC';
export type ReleaseType = 'releaseA' | 'releaseB' | 'releaseC';

interface IProps {
  type: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const labelList: any = {
  deliveryA: {
    text: '배송중',
    boxStyles: {
      backgroundColor: colors.DeliveryLabelA_Main,
      borderWidth: 1,
      borderColor: colors.DeliveryLabelA_Sub,
    },
    textStyles: {
      color: colors.DeliveryLabelA_Sub,
    },
  },
  deliveryB: {
    text: '발송준비',
    boxStyles: {
      backgroundColor: colors.DeliveryLabelB_Main,
      borderWidth: 1,
      borderColor: colors.DeliveryLabelB_Sub,
    },
    textStyles: {
      color: colors.DeliveryLabelB_Sub,
    },
  },
  deliveryC: {
    text: '발송완료',
    boxStyles: {
      backgroundColor: colors.DeliveryLabelC_Main,
      borderWidth: 1,
      borderColor: colors.DeliveryLabelC_Sub,
    },
    textStyles: {
      color: colors.DeliveryLabelC_Sub,
    },
  },
  repairA: {
    text: '무상수리',
    boxStyles: {
      backgroundColor: colors.RepairLabelA_Main,
    },
    textStyles: {
      color: colors.White,
    },
  },
  repairB: {
    text: '교환처리',
    boxStyles: {
      backgroundColor: colors.RepairLabelB_Main,
    },
    textStyles: {
      color: colors.White,
    },
  },
  releaseA: {
    text: '출고요청',
    boxStyles: {
      backgroundColor: colors.ReleaseLabelA_Main,
      borderWidth: 1,
      borderColor: colors.ReleaseLabelA_Sub,
    },
    textStyles: {
      color: colors.ReleaseLabelA_Sub,
    },
  },
  releaseB: {
    text: '출고완료',
    boxStyles: {
      backgroundColor: colors.ReleaseLabelB_Main,
      borderWidth: 1,
      borderColor: colors.ReleaseLabelB_Sub,
    },
    textStyles: {
      color: colors.ReleaseLabelB_Sub,
    },
  },
  releaseC: {
    text: '출고취소',
    boxStyles: {
      backgroundColor: colors.ReleaseLabelC_Main,
      borderWidth: 1,
      borderColor: colors.ReleaseLabelC_Sub,
    },
    textStyles: {
      color: colors.ReleaseLabelC_Sub,
    },
  },
  depositA: {
    text: '입금대기',
    boxStyles: {
      backgroundColor: colors.DepositLabelA_Main,
      borderWidth: 1,
      borderColor: colors.DepositLabelA_Sub,
    },
    textStyles: {
      color: colors.White,
    },
  },
  depositB: {
    text: '후 정산',
    boxStyles: {
      backgroundColor: colors.DepositLabelB_Main,
      borderWidth: 1,
      borderColor: colors.DepositLabelB_Sub,
    },
    textStyles: {
      color: colors.White,
    },
  },
  depositC: {
    text: '입금완료',
    boxStyles: {
      backgroundColor: colors.DepositLabelC_Main,
      borderWidth: 1,
      borderColor: colors.DepositLabelC_Sub,
    },
    textStyles: {
      color: colors.White,
    },
  },
};

const Label = ({ type }: IProps) => {
  return (
    <View style={[styles.listLabel, labelList[type].boxStyles]}>
      <Text style={[styles.listLabelText, labelList[type].textStyles]}>{labelList[type].text}</Text>
    </View>
  );
};

export default Label;
