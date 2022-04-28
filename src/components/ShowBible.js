import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

function SelectChapter(){
    return(
        <div>
            <Select defaultValue="창세기" style={{width: 100}} showArrow='false' showArrow={false}>
                <Option value="창세기">창세기</Option>
                <Option value="출애굽기">출애굽기</Option>
                <Option value="요한계시록">요한계시록</Option>
            </Select>
            말씀
            <Select defaultValue="1" style={{width: 70, marginLeft:10}} showArrow={false}>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">300</Option>
            </Select>
            장
        </div>
    )
}

export default function ShowBible(){

    return(
        <div style={{ width: '100%'}}>
            <SelectChapter/>
            contents
        </div>
    )
}