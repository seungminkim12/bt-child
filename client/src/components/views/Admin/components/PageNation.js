import React from 'react'

const PageNation = () => {
    return (
        <div className="paging_box">
            <div className="paging">
                <a className="wide">처음</a>
                <a className="wide">이전</a>
                <a className="on">1</a>
                <a>2</a>
                <a>3</a>
                <a>4</a>
                <a>5</a>
                <a>6</a>
                <a>7</a>
                <a>8</a>
                <a>9</a>
                <a>10</a>
                <a className="wide">다음</a>
                <a className="wide">마지막</a>
            </div>
        </div>
    );
};

export default PageNation;