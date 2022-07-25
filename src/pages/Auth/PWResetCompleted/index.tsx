import React from 'react';

import AuthCompleted from '~/components/Layout/AuthCompleted';

const PWResetCompleted = () => {
  return (
    <AuthCompleted
      title="비빌번호 재설정 완료!"
      description={'비밀번호가 정상적으로 변경되었습니다.\n이제 새로운 비밀번호로 로그인할 수 있습니다.'}
    />
  );
};

export default PWResetCompleted;
