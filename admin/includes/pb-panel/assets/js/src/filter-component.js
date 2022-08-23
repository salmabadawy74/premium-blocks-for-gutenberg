const FilterComponent = () => {


const tabs = [
    { name: 'All', slug: 'all' },
    { name: 'New', slug: 'new' },
    { name: 'Creative', slug: 'creative' },
];





    return <div className="pb-blocks-filter">
        <div className="justify-between items-center space-y-4 sm:flex sm:flex-col lg:space-y-0 lg:flex-row">
                <nav className="flex -ml-4 flex-wrap justify-center lg:justify-start" aria-label="Tabs">
                    {tabs.map( ( tab ) => (
                    <a 
                        key={tab.name}
                        className={ 'neww' }
                    >
                        {tab.name}
					</a>
                    ) )}
                </nav>
            </div>
    </div>
}

export default FilterComponent