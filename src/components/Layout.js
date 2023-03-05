export default function Layout() {
    return (
        <div id="front-page-container">
            <header>
                <h1>Ressursarkiv</h1>
            </header>
            <main>
                <div id="category-tabs">
                    <button className="tablinks" cat-index="HTML" id="openStart">HTML</button>
                    <button className="tablinks" cat-index="CSS">CSS</button>
                    <button className="tablinks" cat-index="JavaScript">JavaScript</button>
                    <button className="tablinks" cat-index="React">React</button>
                    <button className="tablinks" cat-index="Sanity-CMS">Sanity og CMS</button>
                </div>
                <div id="HTML" className="tabcontent">
                    <h2>Kat1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                        dapibus quis elit vel auctor. Nullam facilisis nec orci non lacinia.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                        ac turpis egestas. Sed ullamcorper augue neque, nec vehicula nunc rutrum eget.
                    </p>
                    <ul>
                        <li><a href="#">Url 1</a></li>
                        <li><a href="#">Url 2</a></li>
                        <li><a href="#">Url 3</a></li>
                        <li><a href="#">Url 4</a></li>
                        <li><a href="#">Url 5</a></li>
                    </ul>
                </div>
                <div id="CSS" className="tabcontent">
                    <h2>Kat1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                        dapibus quis elit vel auctor. Nullam facilisis nec orci non lacinia.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                        ac turpis egestas. Sed ullamcorper augue neque, nec vehicula nunc rutrum eget.
                    </p>
                    <ul>
                        <li><a href="#">Url 1</a></li>
                        <li><a href="#">Url 2</a></li>
                        <li><a href="#">Url 3</a></li>
                        <li><a href="#">Url 4</a></li>
                        <li><a href="#">Url 5</a></li>
                    </ul>
                </div>
                <div id="JavaScript" className="tabcontent">
                    <h2>Kat1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                        dapibus quis elit vel auctor. Nullam facilisis nec orci non lacinia.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                        ac turpis egestas. Sed ullamcorper augue neque, nec vehicula nunc rutrum eget.
                    </p>
                    <ul>
                        <li><a href="#">Url 1</a></li>
                        <li><a href="#">Url 2</a></li>
                        <li><a href="#">Url 3</a></li>
                        <li><a href="#">Url 4</a></li>
                        <li><a href="#">Url 5</a></li>
                    </ul>
                </div>
                <div id="React" className="tabcontent">
                    <h2>Kat1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                        dapibus quis elit vel auctor. Nullam facilisis nec orci non lacinia.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                        ac turpis egestas. Sed ullamcorper augue neque, nec vehicula nunc rutrum eget.
                    </p>
                    <ul>
                        <li><a href="#">Url 1</a></li>
                        <li><a href="#">Url 2</a></li>
                        <li><a href="#">Url 3</a></li>
                        <li><a href="#">Url 4</a></li>
                        <li><a href="#">Url 5</a></li>
                    </ul>
                </div>
                <div id="Sanity-CMS" className="tabcontent">
                    <h2>Kat1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                        dapibus quis elit vel auctor. Nullam facilisis nec orci non lacinia.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                        ac turpis egestas. Sed ullamcorper augue neque, nec vehicula nunc rutrum eget.
                    </p>
                    <ul>
                        <li><a href="#">Url 1</a></li>
                        <li><a href="#">Url 2</a></li>
                        <li><a href="#">Url 3</a></li>
                        <li><a href="#">Url 4</a></li>
                        <li><a href="#">Url 5</a></li>
                    </ul>
                </div>
            </main>
        </div>
    )
}