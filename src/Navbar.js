import React, { useState } from 'react';
import Sample1 from './Pages/sample-1';
import Sample2 from './Pages/sample-2';
import Sample3 from './Pages/sample-3';
import Sample4 from './Pages/sample-4';
import Sample5 from './Pages/sample-5';
import Sample6 from './Pages/sample-6';
import Sample7 from './Pages/sample-7';
import Sample8 from './Pages/sample-8';
import Sample9 from './Pages/sample-9';
import Sample10 from './Pages/sample-10';
import './Navbar.css';

function Navbar() {
    const [activeSample, setActiveSample] = useState(null);

    // Object mapping sample names to their corresponding components
    const samples = {
        'Sample 1': <Sample1 />,
        'Sample 2': <Sample2 />,
        'Sample 3': <Sample3 />,
        'Sample 4': <Sample4 />,
        'Sample 5': <Sample5 />,
        'Sample 6': <Sample6 />,
        'Sample 7': <Sample7 />,
        'Sample 8': <Sample8 />,
        'Sample 9': <Sample9 />,
        'Sample 10': <Sample10 />,
    };

    return (
        <div>
            <nav style={{ marginBottom: '20px' }}>
                {Object.keys(samples).map((sampleKey, index) => (
                    <button key={index} onClick={() => setActiveSample(samples[sampleKey])} style={{ marginRight: '10px' }}>
                        {sampleKey}
                    </button>
                ))}
            </nav>
            <div>
                {/* Display the active sample component */}
                {activeSample}
            </div>
        </div>
    );
}

export default Navbar;
