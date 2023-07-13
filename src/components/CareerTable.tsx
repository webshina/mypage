import React from 'react';
import { HiOfficeBuilding } from 'react-icons/hi';
import { IoMdSchool } from 'react-icons/io';

type Props = {};
export const CareerTable: React.FC<Props> = (props) => {
  return (
    <div className="py-12 px-3 lg:px-12 bg-slate-900/50 rounded-xl">
      <table>
        <tbody>
          <CareerItem
            startAt="2012/4"
            endAt="2016/3"
            type="education"
            company="Keio University"
            position="Economics department / Statistic"
          />
          <VerticalLine />
          <CareerItem
            startAt="2016/4"
            endAt="2021/9"
            type="work"
            company="Hitachi, Ltd."
            position="Infra Engineer / Independent Web Developer"
          />
          <VerticalLine />
          <CareerItem
            startAt="2021/9"
            endAt="2022/10"
            type="work"
            company="Social Media Marketing Company (Start-up)"
            position="CTO"
          />
          <VerticalLine />
          <CareerItem
            startAt="2022/10"
            endAt="now"
            type="work"
            company="NFT Marketplace Operator Company"
            position="freelance / web3.0 engineer / Manager"
          />
        </tbody>
      </table>
    </div>
  );
};

type CareerItemProps = {
  startAt: string;
  endAt: string;
  type: 'work' | 'education';
  company: string;
  position: string;
  description?: string;
};
const CareerItem: React.FC<CareerItemProps> = (props) => {
  return (
    <tr>
      <td className="text-center text-xs lg:text-sm">
        {props.startAt}
        <br />
        |
        <br />
        {props.endAt}
      </td>
      <td className="w-3" />
      <td className="h-full align-middle">
        <div className="flex justify-center items-center h-full gradient-bg-purple-to-pink p-5 rounded-full">
          {props.type === 'work' && <HiOfficeBuilding size={20} />}
          {props.type === 'education' && <IoMdSchool size={20} />}
        </div>
      </td>
      <td className="w-3" />
      <td>
        <div className="text-sm lg:text-xl font-bold">{props.company}</div>
        <div className="h-1" />
        <div className="text-xs lg:text-base">{props.position}</div>
      </td>
    </tr>
  );
};

const VerticalLine: React.FC = () => {
  return (
    <tr>
      <td></td>
      <td></td>
      <td className="flex justify-center">
        <div className="h-16 w-[0.5px] bg-slate-600" />
      </td>
      <td></td>
      <td></td>
    </tr>
  );
};
