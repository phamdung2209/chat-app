function GenderCheckBox({ selectedGender, onCheckBoxChange }) {
    return (
        <div className="flex">
            <div className="form-control">
                <label htmlFor="male" className="label gap-2 cursor-pointer">
                    <span className="label-text">Male</span>
                    <input
                        type="checkbox"
                        className="checkbox border-slate-900"
                        name="male"
                        checked={selectedGender === 'male'}
                        onChange={() => onCheckBoxChange('male')}
                    />
                </label>
            </div>

            <div className="form-control">
                <label htmlFor="female" className="label gap-2 cursor-pointer">
                    <span className="label-text">Female</span>
                    <input
                        type="checkbox"
                        className="checkbox border-slate-900"
                        name="female"
                        checked={selectedGender === 'female'}
                        onChange={() => onCheckBoxChange('female')}
                    />
                </label>
            </div>

            <div className="form-control">
                <label htmlFor="other" className="label gap-2 cursor-pointer">
                    <span className="label-text">Other</span>
                    <input
                        type="checkbox"
                        className="checkbox border-slate-900"
                        name="other"
                        checked={selectedGender === 'other'}
                        onChange={() => onCheckBoxChange('other')}
                    />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox
