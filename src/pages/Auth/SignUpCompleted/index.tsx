import React from 'react';

import AuthCompleted from '~/components/Layout/AuthCompleted';

const SignUpCompleted = () => {
  return (
    <AuthCompleted
      title="회원가입 완료!"
      description={'회원가입이 완료되었습니다. 로그인 하시면\nKoten 서비스를 이용하실 수 있습니다.'}
    />
  );
};

export default SignUpCompleted;
