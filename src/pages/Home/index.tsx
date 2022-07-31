import { useAppDispatch, useAppSelector } from '@/models/hook';
import { increment } from '@/models/home';
import './index.less';
export default () => {
  const value = useAppSelector(({ home }) => home.value);
  const dispatch = useAppDispatch();
  return (
    <div className="box">
      <span>{value}</span>
      <button onClick={() => dispatch(increment())}>增加数字</button>
    </div>
  );
};
